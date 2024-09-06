import {TwitterFollowCard} from "./components/TwitterFollowCard.tsx";
import './App.css';

export const App = () => {
  return (
    <div className="tw-followCard-list">
      <TwitterFollowCard username="soyaaroncervantes" name="Aaron Cervantes" />
      <TwitterFollowCard username="saulgargar" name="Saúl Garcia" />
    </div>
  )
}
