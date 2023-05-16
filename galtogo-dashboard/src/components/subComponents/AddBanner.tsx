import axios from "axios";
import Button from "./Button";

export default function AddBanner() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function onSubmit(e: any) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", e.target.imageURL.files[0]);

    axios
      .post(
        `${process.env.NEXT_PUBLIC_GALTOGO_SERVER_API}/banner/add`,
        formData
      )
      .then((res) => console.log(res));
  }

  return (
    <div className="w-full p-4 mt-2 bg-white border-slate-200 rounded-lg">
      <div className="p-2 font-bold text-sky-800 text-lg">Banner images</div>
      <form onSubmit={(e) => onSubmit(e)}>
        <input
          className="w-full mt-2 p-4 rounded-lg bg-slate-50"
          placeholder="Name"
          name="imageURL"
          type="file"
        />
        <Button type="submit">Upload</Button>
      </form>
    </div>
  );
}
