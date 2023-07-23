import React from "react";
import Card from "./Card"

const  Cards = ({courses}) => {
    let allCourses = [];

    const getCourses = () => {
        
        Object.values(courses).forEach( (courseCategory) => {
            courseCategory.forEach((course) => {
                allCourses.push(course);
            })
        })
        return allCourses;
     }
    return(
        <div>
        {
            getCourses().map( (course) => {
                <Card></Card>
            } )

        }
        </div>
    )
}

export default Cards;

