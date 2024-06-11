import { toast } from 'react-toastify';

const toasted = {
    success: async function (message) {
        toast.success(message)
    },
    error: async function (message) {
        toast.error(message);
    }
}
export default toasted;