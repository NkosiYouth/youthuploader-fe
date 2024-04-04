import { Flex, Spinner, Stack, Text, useToast } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { ProfileItem } from "../components";
import UserService from '../services/UserService';
import ProfileItemModal from "../components/common/ProfileItemModal";

export default function ValidateProfiles() {
  const toast = useToast();
  const [profiles, setProfiles] = useState([]);
  const [loading, setLoading] = useState(true);

  const [isEditing, setIsEditing] = useState(false);
  const [selectedProfile, setSelectedProfile] = useState(undefined);


  const loadData = async () => {
    try {
      let result = await UserService.getAll({ isValidated: false });
      setProfiles(result.data || []); // Ensure profiles is always an array
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
  }

  const onStopEditing = () => {
    setIsEditing(false);
    setSelectedProfile(undefined);
  }

  const onUpdate = async (id, data) => {
    try{
      await UserService.updateById(id, Object.assign({}, data, {isValidated: true}));
      setIsEditing(false);
      setLoading(true);
      loadData();
      toast({
        description: "Profile verified!",
        status: "success",
        isClosable: true,
      });
    } catch(error){
      console.log(error);
      toast({
        description: "Something went wrong!",
        status: "error",
        isClosable: true,
      });
    }
  }

  useEffect(() => {
    loadData();
  }, []);

  return (
    <Stack gap={6}>
      <Text fontSize="xl" fontWeight="semibold">
        All Validated Profiles
      </Text>
      {loading ? (
        <Flex justifyContent="center">
          <Spinner />
        </Flex>
      ) : profiles.length > 0 ? (
        <Stack>
          {profiles && profiles.map((item, i) => {
            return <ProfileItem key={i} item={item} onSelectProfile={onSelectProfile} />;
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
        isValidated={false}
      />}

    </Stack>
  );
}
