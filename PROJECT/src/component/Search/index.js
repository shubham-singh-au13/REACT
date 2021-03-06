import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import useStyle from "./SearchStyle"
const Search=()=>{
  const  classes=useStyle()
    return (
        <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
    )
}
export default Search