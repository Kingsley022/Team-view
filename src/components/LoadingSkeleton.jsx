import { Skeleton, Box, useBreakpointValue, SimpleGrid } from '@chakra-ui/react';

const LoadingSkeleton = () => {
  const columns = useBreakpointValue({ base: 1, sm: 2, md: 3, lg: 4 });

  return (
    <SimpleGrid columns={columns} spacing={6} paddingX={12}>
      {Array.from({ length: 8 }).map((_, i) => (
        <Box
          key={i}
          bg="white"
          p={4}
          borderRadius="xl"
          boxShadow="sm"
          _hover={{ boxShadow: 'md', transform: 'scale(1.05)' }}
          transition="all 0.3s ease-in-out"
        >
          <Box display="flex" alignItems="center" gap="3" mb="4" pb="3" borderBottom="2px solid #f1f5f9">
            <Skeleton height="56px" width="56px" borderRadius="full" />
            <Box flex="1">
              <Skeleton height="16px" mb="2" />
              <Skeleton height="12px" width="60%" />
            </Box>
          </Box>
          <Box display="flex" flexDirection="column" gap="3">
            {[1, 2, 3, 4].map((item) => (
              <Box display="flex" alignItems="center" gap="2" key={item}>
                <Skeleton height="16px" width="16px" borderRadius="full" />
                <Skeleton height="14px" width="70%" />
              </Box>
            ))}
          </Box>
        </Box>
      ))}
    </SimpleGrid>
  );
};

export default LoadingSkeleton;
