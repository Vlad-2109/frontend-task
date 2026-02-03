export interface Blog {
  id: number;
  image: string;
  author: string;
  date: string;
  title: string;
  text: string;
  buttonText: string;
}

export type BlogDownloadCardProps = {
  text: string;
  size: string;
  width?: string;
};
