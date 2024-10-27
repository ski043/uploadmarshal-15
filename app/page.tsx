import { Dropzone } from "./components/Dropzone";

export default function Home() {
  return (
    <div className="max-w-xl mx-auto min-h-screen w-screen flex flex-col items-center justify-center">
      <h1 className="text-5xl font-bold">
        Upload<span className="text-primary">Marshal</span>
      </h1>

      <Dropzone />
    </div>
  );
}
