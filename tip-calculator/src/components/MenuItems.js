import { Stack } from '@twilio-paste/stack';
import { MenuItemContainer } from '../containers/MenuItemContainer';

export const MenuItems = ({ items }) => {
  return (
    <Stack orientation="vertical" spacing="space60">
      {items.map((item) => (
        <MenuItemContainer
          {...item}
          // total={item.price * item.quantity}
          key={item.uuid}
        />
      ))}
    </Stack>
  );
};
