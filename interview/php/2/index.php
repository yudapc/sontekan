SQL Query Create and insert table:
CREATE TABLE `vouchers` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `account` varchar(255) NOT NULL,
  `amount` decimal(11) NOT NULL DEFAULT '0',
  `type` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=82 DEFAULT CHARSET=utf8;

INSERT INTO `vouchers` VALUE (1, 'Penjualan', 1500000, 'debit'),
(2, 'Penjualan', 450000, 'debit'), (3, 'Biaya', 300000, 'credit'),
(4, 'Biaya', 200000, 'credit'), (5, 'Penjualan', 600000, 'debit'),
(6, 'Pembelian', 400000, 'credit');

Query Answer no 2:
a.
SELECT id, account,
    CASE 
        WHEN type='debit' THEN
        amount
    ELSE
        ""
    END AS debit,
    CASE 
        WHEN type='credit' THEN
        amount
    ELSE
        ""
    END AS debit
FROM vouchers;

b.
SELECT
(SELECT SUM(amount) FROM vouchers WHERE account = 'Penjualan') AS penjualan,
(SELECT SUM(amount) FROM vouchers WHERE account = 'Biaya') AS biaya,
(SELECT SUM(amount) FROM vouchers WHERE account = 'Pembelian') AS pembelian,
(SELECT SUM(amount) FROM vouchers WHERE account = 'Penjualan') -
(SELECT SUM(amount) FROM vouchers WHERE account = 'Biaya') -
(SELECT SUM(amount) FROM vouchers WHERE account = 'Pembelian') AS saldo;
