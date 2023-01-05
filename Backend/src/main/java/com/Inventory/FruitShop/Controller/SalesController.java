package com.Inventory.FruitShop.Controller;

import com.Inventory.FruitShop.entity.Sales;
import com.Inventory.FruitShop.entity.Stock;
import com.Inventory.FruitShop.service.SalesService;
import com.Inventory.FruitShop.service.StockService;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
import javax.persistence.PersistenceContext;
import javax.validation.Valid;
import java.sql.Timestamp;
import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class SalesController {
    @Autowired
    private SalesService SalesService;
    private StockService StockServiceSal;

    @PersistenceContext
    private EntityManager entityManager;
    private Class<? extends com.Inventory.FruitShop.entity.Stock> Stock;

    StockService stockService;
    @PostMapping("/SaveSales")
    public Sales saveSales(@Valid @RequestBody Sales sales){
       /* com.Inventory.FruitShop.entity.Stock stock1 = sales.getStock();
        Long stoItemId = stock1.getStoItemId();

        Stock stock= entityManager.find(Stock,stoItemId);
        stock.setStoQuantity(stock.getStoQuantity()+sales.getSalQuantity());
        StockServiceSal.updateStock(stock.getStoItemId(),stock);*/
        List <Sales> sal=SalesService.fetchSalesList();
       /* Stock stock=stockService.fetchStockById();
        stock.setStoQuantity(stock.getStoQuantity()-sales.getSalQuantity());
        sales.setSalTotalCost(sales.getSalItemCost()*sales.getSalQuantity());
        stockService.saveStock(stock);*/
        return SalesService.saveSales(sales);
    }
    @GetMapping("/GetAllSales")
    public List<Sales> fetchSalesList(){
        return SalesService.fetchSalesList();
    }
    @GetMapping("GetSalesById/{id}")
    public Sales fetchSalesById(@PathVariable("id") Long SalBillId){
        return SalesService.fetchSalesById(SalBillId);
    }
    @DeleteMapping("DelSalesById/{id}")
    public String deleteSalesById(@PathVariable("id") Long SalBillId){
        SalesService.deleteSalesById(SalBillId);
        return "Bill Deleted Successfully";
    }
    @PutMapping("/UpdateSalesById/{id}")
    public Sales updateSales(@PathVariable("id") Long SalBillId, @RequestBody Sales sales){
        Timestamp tss=new Timestamp(System.currentTimeMillis());
        sales.setSalDaT(tss);
        sales.setSalTotalCost(sales.getSalQuantity()*sales.getSalItemCost());
        return SalesService.updateSales(SalBillId, sales);
    }


}
