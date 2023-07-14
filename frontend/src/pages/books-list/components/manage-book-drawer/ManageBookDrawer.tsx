import Button from '#/common/components/button/Button';
import Drawer from '#/common/components/drawer/Drawer';

type ManageBookDrawerProps = {
  visible: boolean;
  bookId?: string;
  onClose?: () => void;
};

function ManageBookDrawer({ visible, bookId, onClose }: ManageBookDrawerProps) {
  return (
    <Drawer open={visible} title={bookId ? 'Update book' : 'Add book'} onClose={onClose}>
      <form>Book Form</form>
      <footer>
        <Button onClick={onClose}>Add book</Button>
        <Button onClick={onClose}>Cancel</Button>
      </footer>
    </Drawer>
  );
}

export default ManageBookDrawer;
