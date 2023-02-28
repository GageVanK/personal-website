import {
  Paper,
  Accordion,
  Text,
  Space,
  Group,
  ActionIcon,
  Center,
  createStyles,
  Card,
  Button
} from "@mantine/core";
import {
  WaveSine,
  LetterC,
  DeviceGamepad,
  Diamond,
  BrandGithub
} from "tabler-icons-react";

export default function ProjectAccordion() {
  return (
    <Paper shadow="xl" radius="lg" p="xl" withBorder>
      <Text
        variant="gradient"
        gradient={{ from: "indigo", to: "cyan", deg: 45 }}
        sx={{ fontFamily: "Greycliff CF, sans-serif" }}
        ta="center"
        fz="xl"
        fw={700}
      >
        Projects
      </Text>
      <Space h="xl" />
      <Accordion variant="separated" radius="lg" defaultValue="customization">
        <Accordion.Item value="Waves">
          <Accordion.Control>
            <Group>
              <WaveSine size={22} strokeWidth={2} color={"black"} />

              <Text fw={500}>Waves</Text>
            </Group>
          </Accordion.Control>
          <Accordion.Panel>
            A React Web App built on the Decentralized-Social (DeSo) Blockchain.
            Twitch meets Twitter. Allowing Twitch creators an easier path to
            monetization and content ownership. Creators can post on-chain,
            Stream via OBS or Streamlabs, and much more.
            <Space h="md" />
            <Card radius="md" withBorder>
              <Group position="apart">
                <Button
                  component="a"
                  href="https://waves-v1.netlify.app/"
                  variant="gradient"
                  gradient={{ from: "indigo", to: "cyan" }}
                >
                  Visit Waves
                </Button>
                <ActionIcon
                  color="blue"
                  variant="light"
                  component="a"
                  href="https://github.com/GageVanK/Social-App-Starter-Pack"
                  size="lg"
                >
                  <BrandGithub size={22} stroke-width={1.5} />
                </ActionIcon>
              </Group>

              <Text size="sm" color="dimmed" mt="sm">
                ReactJS • NodeJS • TypeScript • DeSo TS SDK • Netlify •
                MantineUI
              </Text>
            </Card>
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item value="Combat Collective">
          <Accordion.Control>
            <Group>
              <LetterC size={22} strokeWidth={2} color={"black"} />

              <Text fw={500}>Combat Collective</Text>
            </Group>
          </Accordion.Control>
          <Accordion.Panel>
            A Decentralized Social Network built to empower Martial Artists and
            allow them to connect with their fans. Fundraise through
            Social-Tips, Creator-Coins, and NFTs. NFTs can be Instructionals,
            Highlights, Photos, etc. Any Secondary sales of NFTs will payout
            Royalties to the original creator.
            <Space h="md" />
            <Card radius="md" withBorder>
              <Group position="apart">
                <Button
                  component="a"
                  href="https://combat-collective.netlify.app/"
                  variant="gradient"
                  gradient={{ from: "indigo", to: "cyan" }}
                >
                  Visit Combat Collective
                </Button>
                <ActionIcon
                  color="blue"
                  variant="light"
                  component="a"
                  href="https://github.com/GageVanK/Combat-Collective-DeSo-Beta"
                  size="lg"
                >
                  <BrandGithub size={22} stroke-width={1.5} />
                </ActionIcon>
              </Group>

              <Text size="sm" color="dimmed" mt="sm">
                Angular • Tailwind • TypeScript • DeSo APIs • Netlify
              </Text>
            </Card>
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item value="Typing Game">
          <Accordion.Control>
            <Group>
              <DeviceGamepad size={22} strokeWidth={2} color={"black"} />

              <Text fw={500}>Typing Game</Text>
            </Group>
          </Accordion.Control>
          <Accordion.Panel>
            Reaction Typing Game to see how many characters you can type in a
            20-second interval
            <Space h="md" />
            <Card radius="md" withBorder>
              <Group position="apart">
                <Button
                  component="a"
                  href="https://gages-typing-game.netlify.app/"
                  variant="gradient"
                  gradient={{ from: "indigo", to: "cyan" }}
                >
                  Visit Typing Game
                </Button>
                <ActionIcon
                  color="blue"
                  variant="light"
                  component="a"
                  href="https://github.com/GageVanK/Typing-Game-v2"
                  size="lg"
                >
                  <BrandGithub size={22} stroke-width={1.5} />
                </ActionIcon>
              </Group>

              <Text size="sm" color="dimmed" mt="sm">
                ReactJS • NodeJS • TypeScript • Netlify • Styled-Components •
                MantineUI
              </Text>
            </Card>
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item value="Company Website">
          <Accordion.Control>
            <Group>
              <Diamond size={22} strokeWidth={2} color={"black"} />

              <Text fw={500}>Company Website</Text>
            </Group>
          </Accordion.Control>
          <Accordion.Panel>
            An updated, more responsive react web app of Luxury Brand Holdings
            Company Website.
            <Space h="md" />
            <Card radius="md" withBorder>
              <Group position="apart">
                <Button
                  component="a"
                  href="https://csb-il7ex2.netlify.app/"
                  variant="gradient"
                  gradient={{ from: "indigo", to: "cyan" }}
                >
                  Visit New Website
                </Button>
                <ActionIcon
                  color="blue"
                  variant="light"
                  component="a"
                  href="https://github.com/GageVanK/website-mockup-2"
                  size="lg"
                >
                  <BrandGithub size={22} stroke-width={1.5} />
                </ActionIcon>
              </Group>
              <Space h="xs" />
              <Button
                component="a"
                href="http://www.luxurybrandholdings.com/"
                variant="gradient"
                gradient={{ from: "cyan", to: "indigo" }}
              >
                Visit Old Website
              </Button>

              <Text size="sm" color="dimmed" mt="sm">
                ReactJS • NodeJS • TypeScript • Netlify • Styled-Components •
                MantineUI
              </Text>
            </Card>
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    </Paper>
  );
}
