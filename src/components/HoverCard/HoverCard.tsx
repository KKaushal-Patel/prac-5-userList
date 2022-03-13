import styles from "./HoverCard.module.css";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

const HoverCard = () => {
  const users = useSelector((state: RootState) => state.users);
  const id = useSelector((state: any) => state.id);
  // console.log(id);
  // console.log(users[id]);

  const user = users[id];

  if (typeof id === "number") {
     return (
       <div className={styles["hero_main_card"]}>
         <div className={styles["card_inner"]}>
           <div className={styles.CardHeader}>
             <img src={`${user.avatar}`} alt="img" />
             <h2>{`${user.first_name} ${user.last_name}`}</h2>
             <p>{user.email}</p>
             <h2>Your Plan: Standard</h2>
             <button className={styles["btn_active_user"]}>Active User</button>
           </div>
           <div className={styles.planUser}>
             <label>Plan Uses</label>
             <meter id="file" value="32" max="100">
               32%
             </meter>
           </div>
           <div className={styles.numberData}>
             <div className={styles.dataLeft}>
               <h2>{user.clicksReviewed}</h2>
               <p>Clicks Reviewed</p>
             </div>
             <div className={styles.middle_bar}></div>
             <div className={styles.dataRight}>
               <h2>{user.monthlyClicks}</h2>
               <p>Monthly Clicks</p>
             </div>
           </div>
         </div>
       </div>
     );
  } else {
    return (
      <div className={styles["hero_main_card"]}>
        <div className={styles["card_inner"]}>Please Hover Over the User</div>
      </div>
    );
    
  }
};

export default HoverCard;
