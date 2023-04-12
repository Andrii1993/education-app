import './styles.scss';
import React, { useState, useEffect } from "react";
import axios from "axios";
import Pagination from "./Pagination";

const CourseList = () => {
  const [courses, setCourses] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage] = useState(5);
  const [category, setCategory] = useState("");
  const [level, setLevel] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    axios
      .get("courses.json")
      .then((response) => {
        setCourses(response.data.courses);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  // Filter courses by category
  const filteredCoursesByCategory = category
    ? courses.filter((course) => course.category === category)
    : courses;

  // Filter courses by level
  const filteredCoursesByLevel = level
    ? filteredCoursesByCategory.filter((course) => course.level === level)
    : filteredCoursesByCategory;

  // Filter courses by search term
  const filteredCoursesBySearch = searchTerm
    ? filteredCoursesByLevel.filter((course) =>
        course.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : filteredCoursesByLevel;

  // Get current courses
  const indexOfLastCourse = currentPage * perPage;
  const indexOfFirstCourse = indexOfLastCourse - perPage;
  const currentCourses = filteredCoursesBySearch.slice(
    indexOfFirstCourse,
    indexOfLastCourse
  );

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Handle category filter change
  const handleCategoryChange = (e) => setCategory(e.target.value);

  // Handle level filter change
  const handleLevelChange = (e) => setLevel(e.target.value);

  // Handle search term change
  const handleSearchChange = (e) => setSearchTerm(e.target.value);

  return (
    <div className="container ">
        <div className="course_container">
            <h2 className="course_title">Список курсів</h2>
            
            <div className='filter_container'>
                <label>
                    <input type="text" value={searchTerm} onChange={handleSearchChange} placeholder="Пошук..." className='input'/>
                </label>
                <div>
                    <label>
                        <select value={category} onChange={handleCategoryChange} className='select'>
                            <option value="">All</option>
                            <option value="web development">Web Development</option>
                            <option value="data science">Data Science</option>
                            <option value="programming">Programming</option>
                        </select>
                    </label>
                    <label className=' level'>
                        <select value={level} onChange={handleLevelChange} className='select'>
                            <option value="">All</option>
                            <option value="beginner">Beginner</option>
                            <option value="intermediate">Intermediate</option>
                            <option value="advanced">Advanced</option>
                        </select>
                    </label>
                </div>
            </div>
            <ul>
                {currentCourses.map((course) => (
                <li key={course.id} className='card_container'>
                <img src={course.image} alt={course.name} className='card_img'/>
                <div className='card_info'>
                    <div className='card_name'>{course.name}</div>
                    <div className='card_description'>{course.description}</div>
                    
                </div>
                <div className='btn_container'>
                    <div className='card_price'>Ціна: ${course.price}</div>
                    <button className="btn_card">Купити</button>
                </div>
                </li>
                ))}
                
            </ul>
            <Pagination
                perPage={perPage}
                totalCourses={filteredCoursesBySearch.length}
                paginate={paginate}
            />
        </div>
    </div>
  );
};

export default CourseList;
