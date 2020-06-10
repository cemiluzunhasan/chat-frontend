import userActions from '@/store/user/actions';
import messageActions from '@/store/messages/actions';

export default {
  ...userActions,
  ...messageActions
}
