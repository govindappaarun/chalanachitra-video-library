import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Input, Typography } from "src/components";
import { useForm } from "src/hooks/useForm";
import userService from "src/services/userService";
import styled from "styled-components";

const StyledForm = styled.form`
  max-width: 30rem;
  padding: 1rem;
`;

export default function CreatePlaylist() {
  const initialState = {
    name: "",
    description: "",
  };
  const navigate = useNavigate();

  const { values, onSubmit, onChange } = useForm(() => {
    userService.createPlayList(values).then((response) => {
      navigate(`/home/playlists`);
    });
  }, initialState);
  return (
    <StyledForm onSubmit={onSubmit}>
      <h2>Create Playlist</h2>
      <Input
        className="my-2"
        name="name"
        onChange={onChange}
        placeholder="Enter playlist name"
      />
      <Input
        name="description"
        onChange={onChange}
        placeholder="Enter playlist description"
      />
      <Button className="my-1">Create</Button>
    </StyledForm>
  );
}
