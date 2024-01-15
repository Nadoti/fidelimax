import { notification } from '@/utils/notification';
import axios from 'axios'

interface FormProps {
  name: string
}

export async function sendErrorApi() {
  try {
    const response = await axios.get('https://fdlmx-backgrounds.sfo3.digitaloceanspaces.com/front-test/survey-post-error.json');
    console.log(response)
    notification({message: response.data.error, title: 'Error', type: 'error'})
    return response.data;
  } catch (error) {
    throw error;
  }
};
