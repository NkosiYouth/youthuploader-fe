import { Flex, Spinner, Stack, Text, Input, Select, useToast } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { ProfileItem } from "../components";
import UserService from '../services/UserService';
import ProfileItemModal from "../components/common/ProfileItemModal";
import { COHORT } from "../data/cohort";

export default function AllYouthData() {
  const toast = useToast();
  const [profiles, setProfiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const [isEditing, setIsEditing] = useState(false);
  const [selectedProfile, setSelectedProfile] = useState(undefined);

  const loadData = async () => {
    try {
      let result = await UserService.getAll({ isValidated: true });
      let filteredProfiles = result.data || [];
  
      // Apply additional filters for cohort and searchQuery
      filteredProfiles = filteredProfiles.filter(profile => {
        // Check if cohort matches if filter is applied
        if (filter && profile.cohort !== filter) {
          return false; // Skip this profile if cohort doesn't match the filter
        }
  
        // Check if any of the fields contain the search query
        const searchTerms = searchQuery.toLowerCase().trim().split(" ");
        return searchTerms.every(term =>
          profile.cohort.toLowerCase().includes(term) ||
          profile.first_name.toLowerCase().includes(term) ||
          profile.last_name.toLowerCase().includes(term)
        );
      });

      setProfiles(filteredProfiles);
    } catch (error) {
      console.log(error);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  const onSelectProfile = (profile) => {
    setIsEditing(true);
    setSelectedProfile(profile);
  }

  const onStopEditing = () => {
    setIsEditing(false);
    setSelectedProfile(undefined);
  }

  const onUpdate = async (id, data) => {
    try{
      const updatedData = Object.assign({}, data, {isValidated: true});
      await UserService.updateById(id, updatedData);
      setIsEditing(false);
      setLoading(true);
      loadData();
      toast({
        description: "Profile updated!",
        status: "success",
        isClosable: true,
      });
    } catch(error){
      toast({
        description: "Something went wrong!",
        status: "error",
        isClosable: true,
      });
    }
  }

  useEffect(() => {
    loadData();
  }, [filter, searchQuery]);

  return (
    <Stack gap={6}>
      <Flex justifyContent="space-between">
        <Text fontSize="xl" fontWeight="semibold">
          All Validated Profiles
        </Text>
        <Flex>
          {/* Add Select dropdown for filtering */}
          <Select value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option value="">All Cohorts</option>
            {/* Render dropdown options dynamically from the cohort data */}
            {COHORT.map((cohort, index) => (
              <option key={index} value={cohort}>{cohort}</option>
            ))}
          </Select>
          {/* Add input field for searching */}
          <Input
            placeholder="Search by name or cohort"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            marginLeft="30px"
          />
        </Flex>
      </Flex>
      {loading ? (
        <Flex justifyContent="center">
          <Spinner />
        </Flex>
      ) : Array.isArray(profiles) && profiles.length > 0 ? (
        <Stack>
          {profiles.map((item, i) => {
            return <ProfileItem key={i} item={item} isValidated onSelectProfile={onSelectProfile} />;
          })}
        </Stack>
      ) : (
        <Text textAlign="center" color="gray">
          No Profiles
        </Text>
      )}

      {isEditing && <ProfileItemModal
        data={selectedProfile}
        isOpen={isEditing}
        onClose={onStopEditing}
        onSave={onUpdate}
        isValidated={true}
      />}

    </Stack>
  );
}
