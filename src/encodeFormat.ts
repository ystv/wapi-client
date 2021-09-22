interface EncodeFormat {
    id: number;
    name: string;
    description: string;
    mimeType: string;
    mode: string;
    width: number;
    height: number;
    arguments: string;
    fileSuffix: string;
    watermarked: boolean;
  }
  
  export default EncodeFormat;