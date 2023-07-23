package tfip.b3.mp.pokemart.model;

import java.util.Date;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class OrderSummaryDAO {

    private String orderID;
    private Date orderDate;
    private double total;
    private boolean delivered;

}
