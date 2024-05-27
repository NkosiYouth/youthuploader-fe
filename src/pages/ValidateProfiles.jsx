import {
  Flex,
  Spinner,
  Stack,
  Text,
  Input,
  Select,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { ProfileItem } from "../components";
import UserService from "../services/UserService";
import ProfileItemModal from "../components/common/ProfileItemModal";

// Import the cohorts array from cohort.js
import { COHORT } from "../data/cohort";

export default function ValidateProfiles() {
  const toast = useToast();
  const [profiles, setProfiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const [isEditing, setIsEditing] = useState(false);
  const [selectedProfile, setSelectedProfile] = useState(undefined);

  const loadData = async () => {
    try {
      // Fetch profiles based on isValidated only
      let result = await UserService.getAll({ isValidated: false });
      let filteredProfiles = result.data || [];

      // Apply additional filters for cohort and searchQuery
      filteredProfiles = filteredProfiles.filter((profile) => {
        // Check if cohort matches if filter is applied
        if (filter && profile.cohort !== filter) {
          return false; // Skip this profile if cohort doesn't match the filter
        }

        // Check if any of the fields contain the search query
        const searchTerms = searchQuery.toLowerCase().trim().split(" ");
        return searchTerms.every(
          (term) =>
            profile.cohort.toLowerCase().includes(term) ||
            profile.first_name.toLowerCase().includes(term) ||
            profile.last_name.toLowerCase().includes(term)
        );
      });

      setProfiles(filteredProfiles);
    } catch (error) {
      console.log(error);
      toast({
        description: "Failed to load profiles",
        status: "error",
        isClosable: true,
      });
    } finally {
      setLoading(false);
    }
  };

  const onSelectProfile = (profile) => {
    setIsEditing(true);
    setSelectedProfile(profile);
  };

  const onStopEditing = () => {
    setIsEditing(false);
    setSelectedProfile(undefined);
  };

  const onUpdate = async (id, data, isValidated, isUpdated, callType) => {
    try {
      let flags = {
        isValidated,
        isUpdated,
      };
      if (callType === "update") {
        await UserService.updateById(id, Object.assign({}, data, flags));
        setIsEditing(false);
        setLoading(true);
        loadData();
        toast({
          description: "Updates saved!",
          status: "success",
          isClosable: true,
        });
      } else if (callType === "verify") {
        await UserService.verifyById(id, Object.assign({}, data, flags));
        setIsEditing(false);
        setLoading(true);
        loadData();
        toast({
          description: "Profile verified!",
          status: "success",
          isClosable: true,
        });
      }
    } catch (error) {
      console.log(error);
      toast({
        description: "Something went wrong!",
        status: "error",
        isClosable: true,
      });
    }
  };

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
          {/* Render dropdown options dynamically from the cohort data */}
          <Select value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option value="">All Cohorts</option>
            {COHORT.map((cohort, index) => (
              <option key={index} value={cohort}>
                {cohort}
              </option>
            ))}
          </Select>
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
      ) : profiles.length > 0 ? (
        <Stack>
          {profiles.map((item, i) => (
            <ProfileItem
              key={i}
              item={item}
              onSelectProfile={onSelectProfile}
            />
          ))}
        </Stack>
      ) : (
        <Text textAlign="center" color="gray">
          No Profiles
        </Text>
      )}

      {isEditing && (
        <ProfileItemModal
          data={selectedProfile}
          isOpen={isEditing}
          onClose={onStopEditing}
          onSave={onUpdate}
          isValidated={false}
        />
      )}
    </Stack>
  );
}
