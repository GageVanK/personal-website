import {
  ActionIcon,
  Group,
  Title,
  Center,
  Space,
  Text,
  Paper
} from "@mantine/core";
import { BrandUpwork, BrandLinkedin, BrandGithub } from "tabler-icons-react";

export default function HeroHeader() {
  return (
    <Paper shadow="xl" radius="lg" p="xl" withBorder>
      <Center>
        <Title
          variant="gradient"
          gradient={{ from: "indigo", to: "cyan", deg: 45 }}
          sx={{ fontFamily: "Greycliff CF, sans-serif" }}
          ta="center"
        >
          Gage Van Kuilenburg
        </Title>
      </Center>

      <Space h="md" />
      <Center>
        <Text ta="center" size="md" color="dimmed">
          I am a Web/Software Developer. I recently graduated from Valencia
          College with my BASc in Software Development. I am based in Orlando,
          Fl and currently looking for Web Developer, Full-Stack Developer,
          Junior Software Engineer Roles.
        </Text>
      </Center>
      <Space h="md" />
      <Group spacing={5} position="center" noWrap>
        <ActionIcon
          color="blue"
          variant="light"
          component="a"
          href="https://www.upwork.com/freelancers/~012c5697e7fc2669c1?viewMode=1"
          size="lg"
        >
          <BrandUpwork size={44} stroke-width={1.5} />
        </ActionIcon>
        <ActionIcon
          color="blue"
          variant="light"
          component="a"
          href="http://www.linkedin.com/in/gage-van-kuilenburg-b5a04319a/"
          size="lg"
        >
          <BrandLinkedin size={44} stroke-width={1.5} />
        </ActionIcon>
        <ActionIcon
          color="blue"
          variant="light"
          component="a"
          href="http://github.com/GageVanK"
          size="lg"
        >
          <BrandGithub size={44} stroke-width={1.5} />
        </ActionIcon>
      </Group>
      <Space h="md" />
      <Text align="center" color="dimmed" size="sm">
        gagevank155@gmail.com
      </Text>
    </Paper>
  );
}
