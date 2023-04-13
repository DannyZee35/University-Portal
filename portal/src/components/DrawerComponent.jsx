import { Drawer,Toolbar,ListItem,Divider,ListItemButton ,ListItemIcon,List,ListItemText} from "@mui/material"
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";




const drawerWidth = 300;

export const DrawerComponent=()=>{

    const {user} = useSelector((state)=>state.auth)
    const DrawerList=[
        {
            title: 'Dashboard',
            to: '/',
            visible: user?.UserRole === 'instructor'

        },
        {
          title: 'Courses',
          to: '/courses',
          visible: user?.UserRole === 'instructor'

      },
        {
            
            title: 'HOD',
            to: '/hod',
            visible: user?.UserRole === 'hod'

        },
       
    ]
    const filteredDrawerList = DrawerList.filter((item) => item.visible !== false);

    const drawer = (
        <div>
          <Toolbar />
          <Divider />
          <List>
            {filteredDrawerList.map((item, index) => (
              <ListItem key={index} disablePadding component={Link} to={item.to} sx={{color:'black'}}>
                <ListItemButton>
                  <ListItemIcon>
                    
                  </ListItemIcon>
                  <ListItemText primary={item.title} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          
        </div>
      );
    return(
        <>
        
        
       
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
        
        </>
    )
}