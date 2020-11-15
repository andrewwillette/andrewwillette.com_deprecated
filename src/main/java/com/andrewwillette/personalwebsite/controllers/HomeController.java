import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.*;

@RestController
class HomeController {
    private final Logger log = LoggerFactory.getLogger(HomeController.class);

    @RequestMapping(value="/")
    public String index() {
       return "index";
    }
}