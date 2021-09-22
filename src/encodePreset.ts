import EncodeFormat from "./encodeProfile";

interface Preset {
  id: number;
  name: string;
  description: string;
  formats?: EncodeFormat[];
}

export default Preset;