function Student(pr)
{
    console.log(pr.name);
    return(
        <div style={{backgroundColor: "skyblue", margin:10}}>
            <h1>Hello {pr.name}</h1>
            {/* <h2>Email : {pr.email}</h2>
            <h4>Address: {pr.other.address}</h4> */}
        </div>
    )
}

export default Student