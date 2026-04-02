create database if not exists JogodoBichoo;
use JogodoBichoo;

-- =========================
-- usuarios
-- =========================
create table if not exists users(
    id bigint auto_increment primary key,
    name varchar(100) not null,
    email varchar(150) not null unique,
    password varchar(255) not null,
    created_at timestamp default current_timestamp
);

-- =========================
-- carteira (saldo)
-- =========================
create table if not exists wallets (
    id bigint auto_increment primary key,
    user_id bigint not null,
    balance decimal(10,2) not null default 1000.00,
    created_at timestamp default current_timestamp,
    updated_at timestamp default current_timestamp on update current_timestamp,

    constraint fk_wallet_user
        foreign key (user_id) references users(id)
        on delete cascade
);

-- =========================
-- tabela de animais
-- =========================
create table if not exists animals (
    id int primary key,
    name varchar(50) not null,
    group_number int not null,
    dezenas varchar(20) not null
);

-- =========================
-- sorteios
-- =========================
create table if not exists draws (
    id bigint auto_increment primary key,
    draw_date timestamp default current_timestamp
);

-- =========================
-- resultados do sorteio (5 premios)
-- =========================
create table if not exists draw_results (
    id bigint auto_increment primary key,
    draw_id bigint not null,
    prize_position int not null, -- 1 ao 5
    thousand_number int not null, -- ex: 1234

    constraint fk_draw_result
        foreign key (draw_id) references draws(id)
        on delete cascade
);

-- =========================
-- apostas
-- =========================
create table if not exists bets (
    id bigint auto_increment primary key,
    user_id bigint not null,
    type enum('grupo', 'dezena', 'milhar') not null,
    number varchar(10) not null,
    amount decimal(10,2) not null,
    status enum('pendente', 'ganhou', 'perdeu') default 'pendente',
    created_at timestamp default current_timestamp,

    constraint fk_bet_user
        foreign key (user_id) references users(id)
        on delete cascade
);

-- =========================
-- resultado das apostas
-- =========================
create table if not exists bet_results (
    id bigint auto_increment primary key,
    bet_id bigint not null,
    draw_id bigint not null,
    prize decimal(10,2) default 0,
    created_at timestamp default current_timestamp,

    constraint fk_bet_result_bet
        foreign key (bet_id) references bets(id)
        on delete cascade,

    constraint fk_bet_result_draw
        foreign key (draw_id) references draws(id)
        on delete cascade
);

-- =========================
-- transacoes (controle financeiro)
-- =========================
create table if not exists transactions (
    id bigint auto_increment primary key,
    user_id bigint not null,
    type enum('entrada', 'saida') not null,
    amount decimal(10,2) not null,
    description varchar(255),
    created_at timestamp default current_timestamp,

    constraint fk_transaction_user
        foreign key (user_id) references users(id)
        on delete cascade
);

-- animais
insert into animals (id, name, group_number, dezenas) values
(1, 'avestruz', 1, '01,02,03,04'),
(2, 'aguia', 2, '05,06,07,08'),
(3, 'burro', 3, '09,10,11,12'),
(4, 'borboleta', 4, '13,14,15,16'),
(5, 'cachorro', 5, '17,18,19,20'),
(6, 'cabra', 6, '21,22,23,24'),
(7, 'carneiro', 7, '25,26,27,28'),
(8, 'camelo', 8, '29,30,31,32'),
(9, 'cobra', 9, '33,34,35,36'),
(10, 'coelho', 10, '37,38,39,40'),
(11, 'cavalo', 11, '41,42,43,44'),
(12, 'elefante', 12, '45,46,47,48'),
(13, 'galo', 13, '49,50,51,52'),
(14, 'gato', 14, '53,54,55,56'),
(15, 'jacare', 15, '57,58,59,60'),
(16, 'leao', 16, '61,62,63,64'),
(17, 'macaco', 17, '65,66,67,68'),
(18, 'porco', 18, '69,70,71,72'),
(19, 'pavao', 19, '73,74,75,76'),
(20, 'peru', 20, '77,78,79,80'),
(21, 'touro', 21, '81,82,83,84'),
(22, 'tigre', 22, '85,86,87,88'),
(23, 'urso', 23, '89,90,91,92'),
(24, 'veado', 24, '93,94,95,96'),
(25, 'vaca', 25, '97,98,99,00');

