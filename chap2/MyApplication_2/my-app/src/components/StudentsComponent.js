const StudentsComponents = ()=>{
    const Students_data = [
         {id: 1, name: 'a', grade: 'A'},
         {id: 2, name: 'b', grade: 'B'},
         {id: 3, name: 'c', grade: 'C'},
         {id: 4, name: 'd', grade: 'D'},
         {id: 5, name: 'e', grade: 'E'},
         {id: 6, name: 'd', grade: 'F'},
    ]
    return(
        <>
            {Students_data.map(({id,name,grade},index)=>{
                return(
                    <li key={id}>{index+1} {name} <span>{grade}</span></li>
                )
            })}
        </>
    )
}
export default StudentsComponents