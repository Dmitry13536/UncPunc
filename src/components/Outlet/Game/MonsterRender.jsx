import { useState, useEffect } from 'react';
import sass from '../../../sass/Clicker.module.scss'
import { motion as m } from 'motion/react';
import { useMonster } from '../../../context/MonsterContext'; 


export default function MonsterRender() {
  // const [data, setData] = useState(null); 
  // const [loading, setLoading] = useState(true); 
  // const [error, setError] = useState(null); 
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




  // useEffect(() => {
  //   const fetchData = async () => {
  //     setLoading(true); 
  //     setError(null); 
  //     setData(null);

  //     try {
  //       const apiUrl = `https://api.github.com/repos/Gaboom63/MSM-APi/contents/data/monsters/Common/${current}`;

  //       const response = await fetch(apiUrl);

  //       if (!response.ok) {
  //         const errorData = await response.json();
  //         throw new Error(`Ошибка HTTP: ${response.status} - ${errorData.message || response.statusText}`);
  //       }

  //       const rawData = await response.json();

  //       if (rawData.content) {
  //         const decodedContent = atob(rawData.content); 
  //         setData(JSON.parse(decodedContent));
  //       } else {
  //         setData(rawData);
  //       }

  //     } catch (err) {
  //       console.error("Ошибка при получении данных из GitHub:", err);
  //       setError(err);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  //   fetchData(); 
  // }, [current]); 


  // if (loading) {
  //   return <p>Загрузка данных из репозитория...</p>;
  // }

  // if (error) {
  //   return <p style={{ color: 'red' }}>Ошибка: {error.message}. Убедитесь, что репозиторий и путь к файлу корректны, и у вас есть доступ.</p>;
  // }

  // if (!data) {
  //   return <p>Данные не найдены или пусты.</p>;
  // }

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
