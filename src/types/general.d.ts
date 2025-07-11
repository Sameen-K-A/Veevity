export interface IMessage {
  text: string
  isUser: boolean
};

export interface IProjects {
  name: string;
  sub_heading: string;
  description: string;
  tag: string[];
  image: string;
  url: string;
};