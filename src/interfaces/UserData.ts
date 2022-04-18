export interface User {
  id: string;
  display_name: string;
  images: imagesUser[];
}
interface imagesUser {
  url: string;
}
