import { useState } from "react"

const Homepage = () => {
  const [data, setData] = useState([])

  const onDragEnter = (e) => {
    e.preventDefault()
  }
  const onDragOver = (e) => {
    e.preventDefault()
  }
  const onDrop = (e) => {
    e.preventDefault()
    const files = e.dataTransfer.files
    const reader = new FileReader()

    reader.onload = function (e2) {
      const docValue = e2.target.result
      const cleanDocValue = docValue.split("\r\n")
      setData(cleanDocValue)
    }
    reader.readAsText(files[0])
  }

  return (
    <>
      <div
        className="border-2  m-4 h-32 p-8"
        onDragEnter={onDragEnter}
        onDragOver={onDragOver}
        onDrop={onDrop}
      >
        drag here
      </div>
      <div>
        <table>
          <thead>
            <tr>
              <th className="bg-sky-200">test th</th>
              {data
                .map((value) => value.split(";"))
                .map((value, i) => {
                  if (i === 0) {
                    value.forEach(
                      (element) =>
                        console.log(
                          "th:",
                          element
                        ) /*<th key={element}>{element}</th>*/
                    )
                  }
                })}
            </tr>
          </thead>
          <tbody>
            {data
              .map((value) => value.split(";"))
              .map((value, i) => {
                if (i > 0) {
                  console.log("tr:", i)
                  ;<tr>
                    {value.forEach(
                      (element) => console.log("td:", element)
                      /*<td key={element}>{element}</td>*/
                    )}
                  </tr>
                }
              })}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Homepage
