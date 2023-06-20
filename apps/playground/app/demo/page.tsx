import * as React from 'react';
import {
  Avatar,
  Flex,
  Separator,
  Text,
  Button,
  IconButton,
  DialogRoot,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogClose,
  TextField,
  Grid,
  SelectRoot,
  SelectItem,
} from '@radix-ui/themes';
import { Pencil1Icon } from '@radix-ui/react-icons';
import { ControlPanel } from '../../components/control-panel';
import { users } from './users';
import styles from './page.module.css';

export default function Demo() {
  return (
    <html lang="en" className={styles.document}>
      <body className="rui-reset-body">
        <div id="root">
          <ControlPanel />

          {users.map((user) => (
            <React.Fragment key={user.id}>
              <Flex align="center" justify="between">
                <Flex align="center" gap="3">
                  <Avatar src={user.image} fallback={user.name[0]} />
                  <Flex direction="column">
                    <Text size="2">{user.name}</Text>
                    <Text size="1" color="gray">
                      {user.handle}
                    </Text>
                  </Flex>
                </Flex>

                <DialogRoot>
                  <DialogTrigger>
                    <IconButton size="2" variant="subtle" aria-label="Edit user">
                      <Pencil1Icon />
                    </IconButton>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogTitle mb="3">{user.name}</DialogTitle>
                    <DialogDescription mb="5">Edit and save details below</DialogDescription>

                    <Flex direction="column" gap="2">
                      <Grid gap="1">
                        <Text size="1" weight="bold" color="gray">
                          Name
                        </Text>
                        <TextField defaultValue={user.name} />
                      </Grid>

                      <Grid gap="1">
                        <Text size="1" weight="bold" color="gray">
                          Role
                        </Text>
                        <SelectRoot defaultValue={user.role} menuVariant="subtle-mono">
                          <SelectItem value="viewer">Viewer</SelectItem>
                          <SelectItem value="maintainer">Maintainer</SelectItem>
                          <SelectItem value="contributor">Contributor</SelectItem>
                          <SelectItem value="admin">Admin</SelectItem>
                        </SelectRoot>
                      </Grid>
                    </Flex>

                    <Flex justify="end" gap="3" mt="5">
                      <DialogClose>
                        <Button variant="subtle-mono">Cancel</Button>
                      </DialogClose>
                      <DialogClose>
                        <Button variant="solid">Save</Button>
                      </DialogClose>
                    </Flex>
                  </DialogContent>
                </DialogRoot>
              </Flex>

              <Separator my="3" size="4" />
            </React.Fragment>
          ))}
        </div>
      </body>
    </html>
  );
}