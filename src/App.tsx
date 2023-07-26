import {
  MantineProvider,
  Paper,
  Grid,
  ActionIcon,
  Title,
  Collapse,
  Group,
  TextInput,
  Container
} from "@mantine/core";
import { IconChevronDown, IconChevronRight } from "@tabler/icons-react";
import { useDisclosure } from "@mantine/hooks";

export default function App() {
  const [open, { toggle }] = useDisclosure(false);
  const [open2, { toggle: toggle2 }] = useDisclosure(false);
  const [open3, { toggle: toggle3 }] = useDisclosure(false);
  const [open4, { toggle: toggle4 }] = useDisclosure(false);

  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Container pt="sm">
        <Paper withBorder mb="sm" p="xs">
          <Grid>
            <Grid.Col span="content">
              <ActionIcon onClick={toggle}>
                {open ? <IconChevronDown /> : <IconChevronRight />}
              </ActionIcon>
            </Grid.Col>
            <Grid.Col span="auto">
              <Title order={3} align="left">
                collapsed grid, grid at top
              </Title>
            </Grid.Col>
          </Grid>
          <Collapse in={open} transitionDuration={2000}>
            <Grid>
              <Grid.Col span={6}>
                <TextInput label="input" />
              </Grid.Col>
              <Grid.Col span={6}>
                <TextInput label="input" />
              </Grid.Col>
            </Grid>
          </Collapse>
        </Paper>
        <Paper withBorder mb="sm" p="xs">
          <Group>
            <ActionIcon onClick={toggle2}>
              {open2 ? <IconChevronDown /> : <IconChevronRight />}
            </ActionIcon>
            <Title order={3} align="left">
              collapsed grid, group at top
            </Title>
          </Group>
          <Collapse in={open2} transitionDuration={2000}>
            <TextInput label="input" />
            <TextInput label="input" />
          </Collapse>
        </Paper>
        <Paper withBorder mb="sm" p="xs">
          <Grid>
            <Grid.Col span="content">
              <ActionIcon onClick={toggle3}>
                {open3 ? <IconChevronDown /> : <IconChevronRight />}
              </ActionIcon>
            </Grid.Col>
            <Grid.Col span="auto">
              <Title order={3} align="left">
                collapsed group, grid at top
              </Title>
            </Grid.Col>
          </Grid>
          <Collapse in={open3} transitionDuration={2000}>
            <Group>
              <TextInput label="input" />
              <TextInput label="input" />
            </Group>
          </Collapse>
        </Paper>
        <Paper withBorder p="xs">
          <Group>
            <ActionIcon onClick={toggle4}>
              {open4 ? <IconChevronDown /> : <IconChevronRight />}
            </ActionIcon>
            <Title order={3} align="left">
              collapsed group, group at top
            </Title>
          </Group>
          <Collapse in={open4} transitionDuration={2000}>
            <Group>
              <TextInput label="input" />
              <TextInput label="input" />
            </Group>
          </Collapse>
        </Paper>
      </Container>
    </MantineProvider>
  );
}
