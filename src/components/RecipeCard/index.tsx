import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import {Button, Box, Rating} from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { IRecipe } from "models/Recipe";

export default function RecipeReviewCard({ recipe }: { recipe: IRecipe }) {

  return (
    <Card sx={{ width: 800, display: 'flex'}}>
      <CardMedia
        component="img"
        image="/img/5.jpg"
        alt="Paella dish"
        sx={{ maxHeight: '100%', maxWidth: 300 }}
      />
      <Box
        sx={{ width: 500, display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}
      >
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              R
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={recipe.title}
        />
        <Rating 
          sx={{ padding: 2 }}
          name="size-medium" 
          value={2}
          readOnly
        />
        <CardContent
          sx={{ display: 'flex', flexDirection: 'column', gridGap: 16 }}
        >
          <Typography variant="body1" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Время приготовления: {recipe.time} минут
          </Typography>
        </CardContent>
        <CardActions 
          disableSpacing
          sx={{ display: 'flex', justifyContent: 'space-between' }}
        >
          <Box>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
          </Box>

          <Button size="small">Посмотреть рецепт</Button>
        </CardActions>
      </Box>
      
    </Card>
  );
}