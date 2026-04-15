// app.js (FINAL VERSION - Semua kolom waktu sudah diformat)

// **PENTING: GANTI DENGAN URL WEB APP GOOGLE APPS SCRIPT ANDA**
const GOOGLE_APP_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxqUPEwlOS-xxaDrQQ4mwmM-lYBlMiJ4mxuMVMe30qPzfNUTkc6Vz9Cp3fIPZLqMTWp/exec'; 

// --- VARIABEL GLOBAL UNTUK WAKTU ---
let startTime; // Mencatat kapan form dimuat/dibuka

// --- 1. DATA TOKO DAN CHECKLIST ANDA ---

const TOKO_DATA = {
    // ... (Data TOKO_DATA Anda yang panjang) ...
    
  "SK01":"TELING",
  "SK02":"DAAN MOGOT",
  "SK03":"ARIE LASUT",
  "SK05":"ADIPURA",
  "SK06":"POGIDON",
  "SK07":"MANGUNI",
  "SK08":"TOLOLIU SUPIT",
  "SK09":"MALALAYANG",
  "SK10":"RAYA POLITEKNIK",
  "SK11":"HASANUDDIN",
  "SK12":"WALANDA MARAMIS",
  "SK13":"SAM RATULANGI T",
  "SK15":"SEA MANADO",
  "SK16":"RAYA AA MARAMIS",
  "SK17":"RE. MARTADINATA",
  "SK19":"BAHU",
  "SK20":"WR. MONGINSIDI 2",
  "SK22":"TATAARAN MANADO",
  "SK23":"ARNOLD MONONUTU",
  "SK25":"PANIKI DUA",
  "SK26":"AMONGENA",
  "SK27":"KINIAR",
  "SK29":"CITRALAND II",
  "SK30":"MAPANGET",
  "SK31":"TATAARAN PATAR",
  "SK32":"KLEAK",
  "SK33":"MATANI III",
  "SK34":"GRIYA PANIKI INDAH",
  "SK35":"LANGOWAN",
  "SK36":"LUMIMUUT",
  "SK37":"WALIAN",
  "SK38":"KAKASKASEN TIGA",
  "SK39":"GRIYA PANIKI INDAH 2",
  "SK40":"KAKASKASEN",
  "SK41":"TATELU",
  "SK42":"PASLATEN",
  "SK43":"GAMBESI",
  "SK44":"MALIARO",
  "SK45":"BORGO",
  "SK46":"KEMA I",
  "SK48":"JENDRAL SUDIRMAN",
  "SK49":"SINDULANG SATU",
  "SK50":"DUFA-DUFA",
  "SK51":"JATI",
  "SK52":"KALUMPANG",
  "SK54":"SAM RATULANGI MANADO",
  "SK55":"LIKUPANG II",
  "SK56":"STADION",
  "SK57":"KAYU MERAH",
  "SK58":"BASTIONG KARANCE",
  "SK59":"PAHLAWAN REVOLUSI",
  "SK60":"TABONA",
  "SK61":"SOA",
  "SK62":"BASTIONG TALANGAME",
  "SK63":"PEMUDA",
  "SK64":"HASAN ESA",
  "SK65":"KAMPUNG MAKASSAR",
  "SK66":"BITUNG TENGAH",
  "SK67":"WANGURER TIMUR",
  "SK68":"GIRIAN WERU",
  "SK69":"SISWA GAMSUNGI",
  "SK70":"GOSOMA",
  "SK71":"MALALAYANG SATU",
  "SK73":"WOLOAN",
  "SK74":"WOSIA",
  "SK75":"GAMSUNGI",
  "SK76":"KEMAKMURAN",
  "SK77":"GURA",
  "SK78":"PITU",
  "SK79":"SALERO",
  "SK81":"GIRIAN BAWAH",
  "SK82":"CENGKEH AFO",
  "SK83":"JAMBULA",
  "SK84":"GAMSUNGI RSUD",
  "SK85":"SARONGSONG MINUT",
  "SK86":"WKO",
  "SK87":"EFI EFI",
  "SK88":"KEMAKMURAN 2",
  "SK89":"KAMPUNG PISANG",
  "SK90":"TAFURE",
  "SK91":"KUSU",
  "SK92":"KALUMATA",
  "SK93":"SALAHUDDIN",
  "SK95":"TANAH RAJA",
  "SK96":"MOLOMPAR",
  "SK97":"WAWALI",
  "SK98":"LOWU",
  "SK99":"BOBAWA",
  "AK01":"DARU",
  "AK03":"GORUA",
  "AK04":"BELANG",
  "AK05":"KUPA-KUPA SELATAN",
  "AK06":"MATSA",
  "AK07":"SOMA",
  "AK09":"LIWUTUNG",
  "AK10":"TOBOKO",
  "AK11":"KOTA BARU",
  "AK12":"POPONTOLEN",
  "AK13":"KINALI",
  "AK14":"KAPITU",
  "AK15":"TOMBATU",
  "AK16":"AERTEMBAGA SATU",
  "AK17":"JATI 2",
  "AK18":"DOKULAMO",
  "AK19":"SOAKONORA",
  "AK20":"KAO",
  "AK21":"DC KALAWAT",
  "AK22":"WANEA",
  "AK23":"PONDANG",
  "AK24":"UWURAN",
  "AK25":"GUFASA",
  "AK26":"PORNITI",
  "AK27":"SOAKONORA HALBAR",
  "AK28":"BULI KARYA",
  "AK29":"BULI GELTOLI",
  "AK30":"MANEMBO - NEMBO",
  "AK31":"TARATARA DUA",
  "AK32":"BATURAJA",
  "AK33":"SIDOMULYO",
  "AK34":"TUMPAAN",
  "AK35":"TEDENG",
  "AK36":"MEKARSARI",
  "AK37":"AKELAMO",
  "AK38":"MABA SOAGIMALAHA",
  "AK39":"HATEBICARA",
  "AK40":"SARIO TUMPAAN",
  "AK41":"MATUNGKAS",
  "AK42":"RANOWANGKO",
  "SK1A":"MANEMBO - NEMBO TENGAH",
  "SK1B":"RATATOTOK",
  "SK1C":"GUAEMAADU",
  "SK1D":"PINASUNGKULAN",
  "SK1E":"PAHALETEN",
  "SK1F":"GALALA",
  "SK1G":"PANDU",
  "SK1H":"SANTIAGO",
  "SK1I":"BALBAR",
  "SK1J":"DUMOGA",
  "SK1K":"LELILEF",
  "SK1L":"LELILEF WAIBULAN",
  "SK1M":"MOPUYA",
  "SK1N":"HELEDULAA",
  "SK1O":"LIMBA B",
  "SK1P":"TATELI",
  "SK1Q":"SONDER",
  "SK1R":"LUKULAMO",
  "SK1S":"HEPUHULAWA",
  "SK1T":"DEMBE II",
  "SK1U":"PENTADIO BARAT",
  "SK1V":"JL. DARUSSALAM",
  "SK1W":"MOGOLAING",
  "SK1X":"MODAYAG",
  "SK1Y":"KOTABUNAN",
  "SK1Z":"BUKULASA",
  "SK2A":"WERE",
  "SK2B":"TOGID",
  "SK2C":"BUYUNGON",
  "SK2D":"JL. BRIGJEND KATAMSO",
  "SK2E":"POLITEKNIK 2",
  "SK2F":"WH MANADO",
  "SK2G":"FIDI JAYA",
  "SK2H":"NURWEDA",
  "SK2I":"H.B JASSIN",
  "SK2J":"JL. MOH. YAMIN",
  "SK2K":"ARIEF RAHMAN HAKIM",
  "001S":"D. I. PANJAITAN",
  "002S":"KOTOBANGON",
  "SS1A":"PAYAHE",
  "SS1C":"WAIBULAN",
  "SS1D":"DATAHU",
  "SS1F":"BUBE",
  "SS1G":"POPODU",
  "SS1H":"AYULA SELATAN",
  "SS1I":"POBUNDAYAN",
  "SS1J":"MONGKONAI",
  "SS1K":"WATUTUMOU",
  "SS1L":"TRANS KOBE",
  "SS1N":"PARIGI 7",
  "SS1O":"OBA UTARA",
  "SS1P":"BUKIT DURIAN",
  "SS1Q":"TOLOTIO",
  "SS1R":"YOSONEGORO",
  "SS1S":"LOLEO",
  "SS1T":"PENTADIO TIMUR",
  "SS1U":"MALINGKAPOTO",
  "SS1V":"KWANDANG",
  "SS1W":"DOLODUO",
  "SS1X":"POIGAR",
  "SS1Y":"TRANS SULAWESI",
  "SS1Z":"RANOMUUT",
  "SS2A":"PAGUYAMAN",
  "SS2B":"COBODOE",
  "SS2C":"SOASIO"
};



const CHECKLIST_DATA = {
    // ... (Data CHECKLIST_DATA tetap sama) ...
    people:{
        reguler:[
            "Seragam/Penampilan Reguler", "Tanda Pengenal ID Card Reguler", "Tatap Salam Sapa dan Terimakasih", "Inisiatif Penawaran dan Pelayanan",
            "Jumlah Personil Sesuai Standar Reguler", "Knowledge SPD, STD, APC (Crew)", "Knowledge Planogram Reguler (Crew)", "Knowledge Penerimaan Barang Reguler (Crew)",
            "Knowledge Cek RH & Kadaluwarsa (Crew)", "Knowledge FEFO/FIFO Reguler (Crew)", "Knowledge Program Promosi (Crew)", "Knowledge Penggunaan APAR (Crew)",
            "Knowledge Penggunaan Genset (Crew)", "Knowledge SPD, STD, APC, GM (Pejabat)", "Knowledge AHO (Pejabat)", "Knowledge SOVO (Pejabat)",
            "Knowledge APAR (Pejabat)", "Knowledge Genset (Pejabat)", "Knowledge SMKI (Pejabat)", "Knowledge SO Partial/PDA (Pejabat)",
            "Knowledge Mutasi Asset (Pejabat)", "Knowledge Tata Arsip (Pejabat)", "Penggunaan PIN & Password POS, E-Trans & OTP Reguler",
            "Validitas Tutup Shift", "Validitas Absensi", "Validitas Transaksi Non Tunai", "Validitas SO Partial",
            "Validitas Laporan Catatan vs uang Brankas", "Validitas Laporan Setoran Penjualan"
        ],
        fresh:[
            "Seragam/Penampilan Fresh", "Tanda Pengenal/ID Card Fresh", "Jumlah Personil Sesuai Standard Fresh", "Knowledge Planogram Fresh",
            "Knowledge Penerimaan Barang WH/BKL Fresh", "Knowledge Stock Opname Fresh Food", "Knowledge Terlambat Retur & Kadaluwarsa",
            "FEFO/FIFO Fresh", "Knowledge OFO", "Knowledge Pemusnahan Fresh Food", "Knowledge Repacking Fresh Food",
            "Aktivitas Harian dan Handling Product Fresh", "Penggunaan PIN, Password & OTP Fresh", "Validitas Input OFO",
            "Validitas Stock Product Fresh Food", "Validitas Pemusnahan", "Validitas Repacking/Cut Fruit"
        ]
    },
    product:{
        reguler:[
            "Planogram", "FEFO/FIFO", "Kemasan", "Kualitas", "Kebersihan", "Floor Display", "Terlambat Retur Food dan Non Food",
            "Kadaluwarsa Food", "Kadaluwarsa Non Food", "Kondisi Kesesuaian, Peletakkan dan Kelengkapan Price", "Kesesuaian Price Tag dan Master Harga",
            "Pemasangan POP Non Promosi", "POP dan Media Promosi", "Kelengkapan dan Kerapian", "Kesesuaian Display Media Promosi",
            "Penanganan Pasca Program Promosi", "Kesesuaian Harga dengan POS dan Media Promosi", "Sarana Sewa In Store"
        ],
        fresh:[
            "Kebersihan dan Kualitas Buah/Sayur dan Bumbu Dapur", "Kebersihan dan Kualitas Dairy, Deli, dan Frozen Food", "Kebersihan dan Kualitas Telur",
            "Kebersihan dan Kualitas Daging Sapi, Ayam & Seafood", "Terlambat Retur", "Kadaluwarsa", "Planogram", "Price Tag dan POP"
        ]
    },
    process:{
        reguler:[
            "Update Price tag", "Optimalisasi Rak", "Pencatatan Retur/Void Penjualan", "Kadaluwarsa", "Monitoring Tenant Online & AHO",
            "Kesesuaian Kelengkapan Tenant", "Kesesuaian Kelengkapan AHO", "SOVO", "Tata Arsip Odner", "Tata Arsip Map Acco",
            "Tata Arsip Buku Ekspedisi atau Buku Tulis Biasa", "Penataan Barang Dagangan Good Stock", "Penataan Barang Dagangan Bad Stock",
            "Kelengkapan dan Kesesuaian Uang Setoran Penjualan", "Kelengkapan dan Kesesuaian Uang Modal"
        ],
        fresh:[
            "Administrasi Buku Aktivitas Harian Fresh", "Administrasi Repacking", "Administrasi OFO", "Administrasi Pemusnahan",
            "Administrasi Stock Opname Fresh Food", "Administrasi Penerimaan Barang dari WH", "Administrasi Penerimaan Barang dari BKL/Supplier"
        ]
    },
    place:{
        reguler:[
            "Kebersihan dan Kerapian Halaman Parkir", "Kebersihan dan Kerapian Teras", "Kebersihan dan Kerapian Area Penjualan",
            "Kebersihan dan Kerapian Area Kasir", "Kebersihan dan Kerapian Gudang", "Kebersihan dan Kerapian Selasar",
            "Kebersihan dan Kerapian Kantor", "Kebersihan dan Kerapian Mess", "Kebersihan dan Kerapian Dapur",
            "Kebersihan dan Kerapian Toilet/Kamar Mandi", "Kebersihan dan Kerapian Rak, Chiller, Sarana Sewa dan Perlengkapan Lainnya"
        ],
        fresh:[
            "Kebersihan dan Kerapian Chiller, Freezer, Kontainer, Rak Buah, dan Meja Display",
            "Kebersihan dan Kerapian Perlengkapan dan Peralatan Mendukung", "Standard Suhu Chiller dan Freezer",
            "Ketersediaan Perlengkapan dan Peralatan Fresh Food"
        ]
    }
};


const BOBOT = {
    people: 0.10,
    product: 0.40,
    process: 0.40, 
    place: 0.10
};


// --- FUNGSI BARU: FORMAT WAKTU KE DD/MM/YYYY, HH:MM:SS ---

function formatDateTime(date) {
    const pad = (num) => (num < 10 ? '0' : '') + num;
    const day = pad(date.getDate());
    const month = pad(date.getMonth() + 1); // Bulan dimulai dari 0
    const year = date.getFullYear();
    const hours = pad(date.getHours());
    const minutes = pad(date.getMinutes());
    const seconds = pad(date.getSeconds());
    
    // Format yang diinginkan: DD/MM/YYYY, HH:MM:SS
    return `${day}/${month}/${year}, ${hours}:${minutes}:${seconds}`;
}

// FUNGSI WAKTU & SKOR LAINNYA
function formatDuration(ms) {
    const secondsTotal = Math.floor(ms / 1000);
    const hours = Math.floor(secondsTotal / 3600);
    const minutes = Math.floor((secondsTotal % 3600) / 60);
    const seconds = secondsTotal % 60;
    return `${hours} Jam ${minutes} Menit ${seconds} Detik`;
}

function calculateScore(formData) {
    // ... (Fungsi ini tidak diubah) ...
    const results = {
        totalItems: 0,
        totalScore: 0,
        pilarScore: { people: 0, product: 0, process: 0, place: 0 },
        pilarMax: { people: 0, product: 0, process: 0, place: 0 },
        kategoriScore: { reguler: 0, fresh: 0 },
        kategoriMax: { reguler: 0, fresh: 0 },
        details: []
    };

    const selectedRadios = document.querySelectorAll('input[type="radio"]:checked');
    
    selectedRadios.forEach(radio => {
        const pilar = radio.dataset.pilar;
        const kategori = radio.dataset.kategori;
        const item = radio.dataset.item;
        const score = parseInt(radio.value);

        results.totalItems++;
        results.totalScore += score;
        
        results.pilarScore[pilar] += score;
        results.pilarMax[pilar] += 1;
        
        results.kategoriScore[kategori] += score;
        results.kategoriMax[kategori] += 1;
        
        results.details.push({
            pilar: pilar.charAt(0).toUpperCase() + pilar.slice(1),
            kategori: kategori.charAt(0).toUpperCase() + kategori.slice(1),
            item: item,
            jawaban: score === 1 ? 'Ya' : 'Tidak'
        });
    });

    const finalPilarScore = {};
    for (const pilar in results.pilarScore) {
        finalPilarScore[pilar] = results.pilarMax[pilar] > 0 
            ? results.pilarScore[pilar] / results.pilarMax[pilar] 
            : 0;
    }

    let finalWeightedScore = 0;
    for (const pilar in finalPilarScore) {
        finalWeightedScore += finalPilarScore[pilar] * BOBOT[pilar];
    }
    
    const finalScoreReguler = results.kategoriMax.reguler > 0 
        ? (results.kategoriScore.reguler / results.kategoriMax.reguler) * 100 
        : 0;
    
    const finalScoreFresh = results.kategoriMax.fresh > 0 
        ? (results.kategoriScore.fresh / results.kategoriMax.fresh) * 100 
        : 0;

    return {
        finalTotalScore: (finalWeightedScore / (BOBOT.people + BOBOT.product + BOBOT.process + BOBOT.place)) * 100, 
        finalScoreReguler: finalScoreReguler,
        finalScoreFresh: finalScoreFresh,
        details: results.details
    };
}


// --- 3. FUNGSI INISIASI & SUBMIT ---

function generateChecklist() {
    // ... (Fungsi ini tidak diubah) ...
    const container = document.getElementById('checklist-container');
    container.innerHTML = '';
    let itemIndex = 0;

    for (const pilar in CHECKLIST_DATA) {
        const pilarDiv = document.createElement('div');
        pilarDiv.className = 'pilar-section';
        pilarDiv.innerHTML = `<h3>PILAR: ${pilar.toUpperCase()} (Bobot: ${BOBOT[pilar] * 100}%)</h3>`;

        for (const kategori in CHECKLIST_DATA[pilar]) {
            const kategoriDiv = document.createElement('div');
            kategoriDiv.className = 'kategori-section';
            kategoriDiv.innerHTML = `<h4>Kategori: ${kategori.charAt(0).toUpperCase() + kategori.slice(1)}</h4>`;

            CHECKLIST_DATA[pilar][kategori].forEach(item => {
                itemIndex++;
                const itemDiv = document.createElement('div');
                itemDiv.className = 'audit-item';
                itemDiv.innerHTML = `
                    <label for="item_${itemIndex}">${item}</label>
                    <div class="options">
                        <input type="radio" id="item_${itemIndex}_ya" name="audit_item_${itemIndex}" value="1" 
                                data-pilar="${pilar}" data-kategori="${kategori}" data-item="${item}" required>
                        <label for="item_${itemIndex}_ya">Ya (1)</label>
                        
                        <input type="radio" id="item_${itemIndex}_tidak" name="audit_item_${itemIndex}" value="0" 
                                data-pilar="${pilar}" data-kategori="${kategori}" data-item="${item}" required>
                        <label for="item_${itemIndex}_tidak">Tidak (0)</label>
                    </div>
                `;
                kategoriDiv.appendChild(itemDiv);
            });
            pilarDiv.appendChild(kategoriDiv);
        }
        container.appendChild(pilarDiv);
    }
}


async function handleFormSubmit(event) {
    event.preventDefault();

    const kodeToko = document.getElementById('kode_toko').value;
    const namaToko = document.getElementById('nama_toko').value;
    const auditorName = document.getElementById('auditor_name').value;
    
    // --- PENGHITUNGAN WAKTU SUBMIT & DURASI ---
    const submitTime = new Date();
    
    // MENGGUNAKAN FUNGSI BARU UNTUK FORMAT SEMUA DATA WAKTU
    const formattedTimestamp = formatDateTime(submitTime); 

    const durationMs = submitTime.getTime() - startTime.getTime();
    
    // --- HITUNG SKOR ---
    const calculatedScores = calculateScore(event.target);
    
    // --- TAMPILKAN SKOR SEGERA ---
    document.getElementById('out_kode_toko').textContent = kodeToko;
    document.getElementById('out_nama_toko').textContent = namaToko;
    document.getElementById('out_score_reguler').textContent = calculatedScores.finalScoreReguler.toFixed(2) + ' %';
    document.getElementById('out_score_fresh').textContent = calculatedScores.finalScoreFresh.toFixed(2) + ' %';
    document.getElementById('out_total_score').textContent = calculatedScores.finalTotalScore.toFixed(2) + ' %';
    document.getElementById('score-output').style.display = 'block';

    // --- SIAPKAN DATA UNTUK GOOGLE SHEET (Payload) ---
    const finalPayload = {
        auditor: auditorName,
        // Kolom A: Timestamp menggunakan format DD/MM/YYYY, HH:MM:SS
        timestamp: formattedTimestamp, 
        
        // Objek summary berisi semua data ringkasan
        summary: {
            kode_toko: kodeToko,
            nama_toko: namaToko,
            score_reguler: calculatedScores.finalScoreReguler.toFixed(2),
            score_fresh: calculatedScores.finalScoreFresh.toFixed(2),
            total_score: calculatedScores.finalTotalScore.toFixed(2),

            // Kolom H & I: Data waktu juga diubah formatnya
            start_time: formatDateTime(startTime),            
            submit_time: formattedTimestamp,           
            duration: formatDuration(durationMs)            
        },

        // Data detail per item checklist
        details: calculatedScores.details
    };

    // --- KIRIM DATA KE GOOGLE APPS SCRIPT ---
    const submitBtn = document.querySelector('button[type="submit"]');
    submitBtn.textContent = 'Mengirim Data...';
    submitBtn.disabled = true;

    try {
        await fetch(GOOGLE_APP_SCRIPT_URL, {
            method: 'POST',
            mode: 'no-cors', 
            cache: 'no-cache',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(finalPayload)
        });

        alert('Audit berhasil disubmit! Data telah disimpan ke Google Sheet.');
        document.getElementById('auditForm').reset();
        document.getElementById('score-output').style.display = 'none';
        initApp(); 

    } catch (error) {
        console.error('Error submitting data:', error);
        alert('Terjadi kesalahan saat menyimpan data. Cek koneksi atau URL Apps Script.');
    } finally {
        submitBtn.textContent = 'Submit & Lihat Skor';
        submitBtn.disabled = false;
    }
}

function initApp() {
    // 2.1 MENCATAT WAKTU MULAI (PENTING!)
    startTime = new Date(); 

    // 2.2 Isi Dropdown Toko
    const selectToko = document.getElementById('kode_toko');
    if(selectToko.options.length <= 1) { 
        for (const kode in TOKO_DATA) {
            const option = document.createElement('option');
            option.value = kode;
            option.textContent = `${kode} - ${TOKO_DATA[kode]}`;
            selectToko.appendChild(option);
        }
    }


    // 2.3 Atur Event Listener untuk Dropdown
    selectToko.addEventListener('change', function() {
        document.getElementById('nama_toko').value = TOKO_DATA[this.value] || '';
    });

    // 2.4 Generate Checklist Form
    generateChecklist();

    // 2.5 Atur Event Listener untuk Form Submit
    document.getElementById('auditForm').addEventListener('submit', handleFormSubmit);
}


// Inisialisasi aplikasi saat dokumen selesai dimuat
document.addEventListener('DOMContentLoaded', initApp);
