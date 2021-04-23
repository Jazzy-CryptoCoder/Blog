import React from 'react';
import styled from 'styled-components';
import { Layout } from '../components/Layout';
import { useSiteMetadata } from '../hooks/useSiteMetadata';



export default () => {
  const { title, description } = useSiteMetadata();
  return (
    <>
    <Layout />
    </>
  );
};