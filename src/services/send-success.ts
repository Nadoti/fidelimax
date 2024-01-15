import { notification } from '@/utils/notification';
import axios from 'axios'

interface FormProps {
  name: string
}

export async function sendSuccessApi() {
  try {
    const response = await axios.get('https://fdlmx-backgrounds.sfo3.digitaloceanspaces.com/front-test/survey-post-success.json ');
    notification({message: 'Enviado com Sucesso', title: 'Sucesso', type: 'success'})
    console.log(response)
    return response.data;
  } catch (error) {
    throw error;
  }
};
