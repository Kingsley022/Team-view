import React, { useContext, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Members from '../components/Members'
import { useQuery } from '@tanstack/react-query'; // Import from React Query, not Chakra
import { AppContext } from '../App';
import LoadingSkeleton from '../components/LoadingSkeleton';

const Home = () => {

  const {members, setMembers} = useContext(AppContext);

  // Returns an array of random users
  const { data: users, isLoading, error, refetch, isSuccess } = useQuery({
    queryKey: ['randomUser'],
    queryFn: async () => {
      const response = await fetch('https://random-data-api.com/api/v2/users?size=100');
      if (!response.ok) throw new Error('Failed to fetch user');
      return response.json();
    }
  });

  // Set members after successful fetch
  useEffect(() => {
  if (isSuccess && users) {
    setMembers(users);
  }
}, [isSuccess, users, setMembers]);

  return (
    <>
      <Navbar/>
      {isLoading && <LoadingSkeleton/>}
      {members && <Members members={members} isLoading={isLoading} error={error} refetch={refetch} />}
    </>
  )
}

export default Home