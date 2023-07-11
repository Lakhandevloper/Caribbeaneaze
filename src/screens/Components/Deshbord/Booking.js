import React, { Component } from 'react'
const Data=[
    {
        img:require('../../../assets/profile.png'),
        title:'5xNight+ Raffting',
        desc:'Service by:Paul', 
        price:'$40',
    },
    {
        img:require('../../../assets/profile.png'),
        title:'5xNight+ Raffting+Dinner',
        desc:'Service by:Paul', 
        price:'$50',
    },
    {
        img:require('../../../assets/profile.png'),
        title:'5xNight+ Raffting',
        desc:'Service by:Paul', 
        price:'$200',
    },
    {
        img:require('../../../assets/profile.png'),
        title:'5xNight+ Raffting',
        desc:'Service by:Paul', 
        price:'$300',
    },
]

export default class Booking extends Component {
  render() {
    return (
      <div>
        <div>
        <div>
            {Data.map((Data) => (
            <ul style={{listStyleType:'none',display:'flex',justifyContent:'space-between'}}>
            <div>
            <div style={{width:40,height:40,borderRadius:20,backgroundColor:'#F1F5F9',display:'flex',alignItems:'center',justifyContent:'center'}}>
                    <img style={{width:30,height:30}}
                      src={Data.img} alt=''
                    />
                    </div>
            <li style={{fontSize:10}}>{Data.title}</li>
            </div>
            </ul>
            
            
          ))}
            </div>

        </div>
      </div>
    )
  }
}
