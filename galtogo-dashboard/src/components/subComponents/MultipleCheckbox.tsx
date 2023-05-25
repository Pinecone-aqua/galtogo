import { useState } from "react"

export function MultipleCheckbox({ categories }: { categories: ICategory[] }) {
  const [checked, setChecked] = useState<string[]>([])

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleCheck = (e: any) => {
    let updatedList = [...checked];
    if (e.target.checked) {
      updatedList = [...checked, e.target.value, e.target.id];
    } else {
      updatedList.splice(checked.indexOf(e.target.value, e.target.id), 1)
    }
    setChecked(updatedList);
  }
  console.log(checked);

  return (
    <div>
      {categories.map(({ name, _id }, index) =>
        <div key={index}>
          <input
            type="checkbox"
            id={_id}
            value={name}
            onChange={handleCheck}
          />
          <label>{name}</label>
        </div>
      )}
    </div>
  )
}