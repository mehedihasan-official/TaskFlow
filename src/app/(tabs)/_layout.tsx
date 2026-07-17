import { Tabs } from "expo-router";



export default function TabLayout(){
    return (
        <Tabs>

            

            <Tabs.Screen 
            name = 'index'
            options = {{
                title: "Home",
                headerShown: false
            }}

            />

            <Tabs.Screen
            name = 'addTask'
            options = {{
                title: "Add Task",
                headerShown: false
            }}
            />

        
        </Tabs>
    )
}