const data=[{
    id: 1,
    title: "UX/UI",
    img: "https://www.seoptimer.com/es/blog/wp-content/uploads/2020/06/uiux.png",
    price: 95,
    detail: "Aprende Diseño UX/UI desde cero!",
    stock: 6,
    category: "diseño"
},
{
    id: 2,
    title: "React",
    img: "https://www.seoptimer.com/es/blog/wp-content/uploads/2020/06/uiux.png",
    price: 95,
    detail: "Aprende react desde cero!",
    stock: 9,
    category: "programacion"
},
{
    id: 3,
    title: "Angular",
    img: "https://www.seoptimer.com/es/blog/wp-content/uploads/2020/06/uiux.png",
    price: 95,
    detail: "Aprende Angular desde cero!",
    stock: 2,
    category: "programacion"
},
{
    id: 4,
    title: "Vue",
    img: "https://www.seoptimer.com/es/blog/wp-content/uploads/2020/06/uiux.png",
    price: 95,
    detail: "Aprende Vue desde cero!",
    stock: 10,
    category: "programacion"
},
{
    id: 5,
    title: "React",
    img: "https://www.seoptimer.com/es/blog/wp-content/uploads/2020/06/uiux.png",
    price: 95,
    detail: "Aprende react desde cero!",
    stock:5,
    category: "programacion"
},
{
    id:6,
    title: "Angular",
    img: "https://www.seoptimer.com/es/blog/wp-content/uploads/2020/06/uiux.png",
    price: 95,
    detail: "Aprende Angular desde cero!",
    stock: 12,
    category: "programacion"
},
{
    id: 7,
    title: "Vue",
    img: "https://www.seoptimer.com/es/blog/wp-content/uploads/2020/06/uiux.png",
    price: 95,
    detail: "Aprende Vue desde cero!",
    stock: 7,
    category: "programacion"
},
{
    id: 8,
    title: "UX/UI",
    img: "https://www.seoptimer.com/es/blog/wp-content/uploads/2020/06/uiux.png",
    price: 95,
    detail: "Aprende Diseño UX/UI desde cero!",
    stock: 11,
    category: "diseño"
}
]

export function getCursos(){
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve(data);
        }, 2000);    
    })
}
export function getSingleCurso(id){
    return new Promise((resolve)=>{
        let cursoReq=data.find((item)=>{
            return item.id===Number(id)})
        setTimeout(() => {
            resolve(cursoReq);
        }, 2000);    
    })
}

export function getCursosByCategory(categoryID){
    return new Promise((resolve) => {
        let arrayFilterCourses = data.filter(
          (item) => item.category === categoryID
        );
        setTimeout(() => resolve(arrayFilterCourses), 2000);
      });
}