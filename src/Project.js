import React,{useEffect,useState} from 'react'
import axios from 'axios'



export default function Project() {

  const [countries, setCountries] = useState([]);
  const [data,setData] = useState([]);
  const [filter,setFilter] = useState('')
  const [input,setInput] = useState('')
  const [output,setOutput] = useState('')

    // useEffect(()=>{
    //     fetch('https://restcountries.com/v2/all')
    //     .then(response=>response.json())
    //     .then(response=>setCountries(response))
      // },[])
// 
      useEffect(() => {
       async function getData(){
        const responsive = await axios.get('https://restcountries.com/v2/all')
        setCountries(responsive.data)

       }
       getData()
      },[]);
      
      useEffect(() => {
       setOutput([])
       data.filter(val=>{
        if(val.country.toLowerCase().includes(input.toLocaleLowerCase())){
          setOutput(autput=>[...autput,val])
        }
       })
      }, [input]);

     
      var i = 0;
    return (
    <div className='container'>
      <h1 className='text-center my-3' style={{textDecoration:'underline'}}>Country Api With <span className='text-primary'>REACT</span></h1>
      <h6 className='text-center'>Designed by <a href='http://www.yusuferdogan.com.tr' target='_blank'>YusufErdogan</a></h6>
       <div className='d-flex'>
        <input className='form-control my-3 vw-75'placeholder='Search' onChange={(e)=> setOutput(e.target.value)}/>
        <i className='fas fa-search d-flex justify-content-center align-items-center bg-primary my-3' style={{width:'50px',height:'50px',color:'white',borderRadius:'0px 5px 5px 0px'}}></i>
    </div>
       <table className="table">
  <thead>
   
    <tr>
      <th scope="col">NO</th>
      <th scope="col">NAME</th>
      <th scope="col">CAPITAL</th>
      <th scope="col">REGION</th>
      <th scope="col">FLAG</th>
    </tr>
  </thead>
  <tbody>
   {
    countries.filter(country=>country.name.toLowerCase().includes(output)).map(country=> {
        return(
            <tr key={country.name}>
            <th style={{width:'7%'}}  scope="row">{++i}</th>
            <td style={{width:'25%'}}>{country.name}</td>
            <td style={{width:'25%'}}>{country.capital}</td>
            <td style={{width:'25%'}}>{country.region}</td>
            <td style={{width:'25%'}}><img style={{width:'40px'}} src={country.flag}/></td>
          </tr>
        )
    })
   }
  </tbody>
</table>
    </div>
  )
}
