import { turtleDI } from "./TurtleCore/TurtleBinding";
import { KeyBoardControlVisualization } from "./Visualization/KeyBoardContolVisualization";
import { TurtleVisualizationMock } from "./Visualization/TurtleVisualizationMock";

class Program{

    public static Main(){
        let visualization = new KeyBoardControlVisualization();
        visualization.Show(); 
    }
}

const program = new Program();
turtleDI.setTurtle(new TurtleVisualizationMock());
Program.Main();

