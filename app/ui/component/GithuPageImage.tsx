import Image from 'next/image';

interface GithubPageImageProps extends React.ComponentProps<typeof Image> {
  src: string;
}

const GithubPageImage: React.FC<GithubPageImageProps> = ({ src, ...props }) => {
  // const basePath =  process.env.IMAGE_BASE_PATH || '';
  if (!src.startsWith("https")) {
    return <Image src={`/study-in-vancouver${src}`} {...props} />;
  } else {
    return <Image src={`${src}`} {...props} />;
  }
};

export default GithubPageImage;