import PrintIcon from "@mui/icons-material/Print";
import { IRecipe } from "models/Recipe";
import styles from "./print.module.scss";

const pdfMake = require('pdfmake/build/pdfmake.js');
const pdfFonts = require('pdfmake/build/vfs_fonts.js');

export const PrintElem = ({recipe}:{recipe:IRecipe}) => {
  
  pdfMake.vfs = pdfFonts.pdfMake.vfs;      

  function buildPDF(){
    const content = arraizeData(recipe);
    const docDefinition = {
      content,
      styles: css
    };
    pdfMake.createPdf(docDefinition).download(`CookBook - ${recipe.title}`);
  }

  function arraizeData(data:IRecipe){

    const {time, author, typeOfMeal, portionsAmount } = data;

    const content = [
        { text: `CookBook: id(${data._id}) - author:${author || 'Автор не указан...'}`, style: 'cookbookLogo' },
        { text: data.title, style: 'title' },
        { text: 'Ингридиенты:', style:'propsTitle' },
        data.ingredients.map((el)=>{
            return `${el.description} - ${el.count}`;
        }),
        " ",
    ];
    if(time) content.push(
            { text: 'Время приготовления:', style:'propsTitle' }, 
            { text: `${time} минут`, style:'props' }, 
            " ");
    if(portionsAmount) content.push(
            { text: 'Количество персон:', style:'propsTitle' }, 
            { text: `${portionsAmount} персон`, style:'props' }, 
            " ");
    if(typeOfMeal) content.push(
            { text: 'Разновидность блюда:', style:'propsTitle' }, 
            { text: typeOfMeal, style:'props' }, 
            " ");
    content.push({ text: 'Процесс приготовления', style:'subTitle' });
    content.push(
        ...data.steps.map((step, i):Array<any>=> ([
            { text:`шаг ${i+1}`, style:'step' },
            { text:` ${step.description}`, style:'stepText' },
            " "
        ]
        ))
    );
    return content;
  }
  
  const css = {
    cookbookLogo:{
        margin: [2,2,0,0],
        color: '#ccc',
        fontSize: 14,
    },
    title:{
        alignment: 'center',
        fontSize: 20,
    },
    subTitle:{
        fontSize: 18,
        alignment: 'center',
    },
    props:{
        fontSize: 12
    },
    propsTitle:{
        fontSize: 14
    },
    ingrLeft:{
        alignment: 'right',
        margin:[0,0,10,0]
    },
    step:{
        fontSize: 8
    },
    stepText:{
    }
  };   
  return (
    <div className={styles.print}>
      <span onClick={buildPDF}>
        <PrintIcon />
      </span>
    </div>
  );
};
