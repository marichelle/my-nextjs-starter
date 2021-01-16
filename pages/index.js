import Head from 'next/head'
import { Box, Code, Flex, Heading, SimpleGrid, Text } from '@chakra-ui/react'

const links = [
  {
    url: 'https://nextjs.org/docs',
    title: 'Documentation',
    text: 'Find in-depth information about Next.js features and API.',
  },
  {
    url: 'https://nextjs.org/learn',
    title: 'Learn',
    text: 'Learn about Next.js in an interactive course with quizzes!',
  },
  {
    url: 'https://github.com/vercel/next.js/tree/master/examples',
    title: 'Examples',
    text: 'Discover and deploy boilerplate example Next.js projects.',
  },
  {
    url:
      'https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app',
    title: 'Deploy',
    text: 'Instantly deploy your Next.js site to a public URL with Vercel.',
  },
]

export default function Home() {
  return (
    <Flex
      direction="column"
      justifyContent="center"
      alignItems="center"
      minH="100vh"
      px={2}
    >
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Flex
        as="main"
        direction="column"
        justifyContent="center"
        alignItems="center"
        py={20}
      >
        <Heading as="h1">
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </Heading>

        <Text>
          Get started by editing <Code>pages/index.js</Code>
        </Text>

        <SimpleGrid columns={2} maxW="800px" mt={12}>
          {links.map(link => (
            <a key={link.title} href={link.url}>
              <Box
                border="1px solid"
                borderColor="#eaeaea"
                borderRadius={10}
                flexBasis="45%"
                m={4}
                p={6}
                _hover={{
                  color: `#0070f3`,
                  borderColor: `#0070f3`,
                }}
              >
                <Heading as="h3" fontSize={24} mb={4}>
                  {link.title} &rarr;
                </Heading>
                <Text fontSize={20}>{link.text}</Text>
              </Box>
            </a>
          ))}
        </SimpleGrid>
      </Flex>
    </Flex>
  )
}
