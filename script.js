const boxes = document.querySelectorAll('.box');
const heading = document.querySelector('.heading span')
const btn = document.querySelector('.btn')

const colors = [ '#efd81d',
                 '#1E488E',
                 '#eee', 
                 '#b52e31', 
                 '#43853d', 
                 '#3D98DC',
                 '#e04e39'
                            ]

const techs = ['Liberty Mutual',
               'Progressive',
               'CSAA', 
               'State Farm', 
               'Geico', 
               'Nationwide', 
               'Farmers'
                        ]

let current = 1;

const textStyle = () =>{
    heading.style.color = colors[current - 1]
    heading.textContent = techs[current - 1]
    btn.style.backgroundColor = colors[current - 1]
    btn.firstElementChild.textContent = techs[current - 1]
}

let interval = setInterval(() =>{
    boxes.forEach((box) => {
        if(current > boxes.length) current = 1
        if(box.classList[1].split('-')[1] * 1 === current) {
            box.classList.add('active')
        } else{
            box.classList.remove('active')
        }
    });
    textStyle()
    current++
},3000)


boxes.forEach((box) =>{
    box.addEventListener('click', () =>{
        boxes.forEach((cube)=>{
            cube.classList.remove('active')
        })
        box.classList.add('active')
        current = box.classList[1].split('-')[1] * [1]

        textStyle()


        clearInterval(interval)
    })
})