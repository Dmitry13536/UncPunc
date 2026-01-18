import { useState, useEffect } from 'react';
import sass from '../../../sass/Clicker.module.scss'
import { motion as m } from 'motion/react';
import { useMonster } from '../../../context/MonsterContext'; 


export default function MonsterRender() {

  const {HP, maxHp, attackMonster, current, animation, getMonsterById} = useMonster();
  const [image, setImage] = useState(null);
  const monster = getMonsterById(current);

  useEffect(()=>{
    
    import(`../../../IMG/Monsters/${monster.image}`)
    .then(module => setImage(module.default))
    .catch(error => {
        console.error('Failed to load monster image:', error);
        setImage('/fallback-monster.png');
      });

  }, [monster])


  const monsterVariants = {
  active: { rotate: 360, scale: 0.5, filter: "brightness(0.3)" },
  pressed: { scale: 1.1 }
  
};


  return (
    <div className={sass.monster}>
          <p className={sass.monsterName}>{monster.name}</p>
          <p>{HP}/{maxHp}</p>
          {animation ? 
          <m.img 
            variants={monsterVariants}
            animate="active"
            whileTap="pressed"
            transition={{ duration: 0.5 }}
            onClick={attackMonster} 
            className={sass.monsterImg} 
            src={image} 
            draggable={false} 
          />
            :
          <m.img 
            onClick={attackMonster}  
            whileTap={{scale: 1.1}} 
            transition={{default:{duration: 0.1}, rotate:{duration:0}}} 
            className={sass.monsterImg} 
            src={image}  
            draggable={false} />
          }
        </div>
  )
}
