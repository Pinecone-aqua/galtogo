/* eslint-disable @typescript-eslint/no-explicit-any */
// Demo: https://res.cloudinary.com/demo/image/upload/w_300,c_limit,q_auto/turtles.jpg
export default function CloudinaryLoader({
  src,
  width,
  quality,
}: {
  src: any;
  width: any;
  quality: any;
}) {
  const params = ["f_auto", "c_limit", `w_${width}`, `q_${quality || "75"}`];
  return `res.cloudinary.com/${params.join(",")}${src}`;
}
