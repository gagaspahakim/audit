// --- 1. DATA TOKO DAN CHECKLIST ---

const TOKO_DATA = {
    "SG98":"GUNUNG TABUR - BERAU [GTBU]", "MG04":"KUSUMA BANGSA 1 - TARAKAN [KBTK1]",
    "MG09":"DR. SOETOMO 1 - TARAKAN [DSTK1]", "MG07":"GAJAH MADA 1 - TARAKAN [GMTK1]",
    "MG06":"JENDRAL SUDIRMAN 1 - TARAKAN [JSTK1]", "MG05":"M SAID - SAMARINDA [MSMD]",
    "MG03":"RINDING - BERAU [RGBU]", "MG10":"PESONA BUKIT BATUAH - BALIKPAPAN [PBB01]",
    "MG08":"GAJAH MADA 2 - TARAKAN [GMTK2]", "MG13":"MULAWARMAN 3 - TARAKAN [M3TRK]",
    "MG14":"LESTARI - TARAKAN [LSTRK]", "MG15":"SEI SESAYAP - TARAKAN [SEITRK]",
    "MG12":"MULAWARMAN 1 - TARAKAN [MTRK]", "MG11":"KAPTEN SOEDJONO - SAMARINDA [KSSMD]",
    "MG16":"BUNG TOMO 2 - SAMARINDA [BGT2]", "MG20":"KH MASKUR - BULUNGAN [KHMBUL]",
    "MG17":"KUSUMA BANGSA 2 - TARAKAN [KBTK2]", "MG19":"RA KARTINI - GROGOT [RKTG]",
    "MG18":"YOS SUDARSO - TARAKAN [YSTK]", "MG21":"PADAT KARYA - SAMARINDA [PDTK]",
    "MG22":"PULAU SAMBIT - BERAU [PSBU]", "MG23":"AYOEB - BERAU [AYBU]",
    "MG24":"SEMANGKA - BULUNGAN [SMKB]", "MG26":"KH HARUN NAFSI - SAMARINDA [KHN]",
    "MG27":"PROPINSI - PENAJAM [PROJAM]", "MG25":"AMPERA FRANCHISE - SAMARINDA [AMPR]",
    "MG29":"YOS SUDARSO 2 - TARAKAN [YSTK2]", "MG30":"JUWATA - TARAKAN [JWTRK]",
    "MG28":"PULAU BUNYU - TARAKAN [PBTRK]", "MG31":"AM SANGAJI - SAMARINDA [AMSDM]",
    "MG36":"GUNUNG KAPUR - SAMARINDA [GKSMD]", "MG33":"HASANUDDIN - GROGOT [HSDGT]",
    "MG34":"WIJAYA KUSUMA - TARAKAN [WKTRK]", "MG35":"SENGKAWIT - BULUNGAN [SLBW]",
    "MG32":"LABANAN - BERAU [LBBRU]", "MG39":"AKI BALAK - TARAKAN [AKTRK]",
    "MG38":"KILO 2 JELARAI - BULUNGAN [KLBL]", "MG40":"SALAK FRANCHISE - BULUNGAN [SKBL]",
    "MG41":"GUNUNG MERBABU - SAMARINDA [GMSMD]", "MG42":"MOJO - BERAU [MJBRU]",
    "MG43":"BAYANUDDIN - BERAU [BYBRU]", "MG44":"AGUS SALIM - TARAKAN [ASTN]",
    "MG45":"NIPAH NIPAH - PENAJAM [NHPJM]", "MG46":"LANGSAT - BULUNGAN [LSBLG]",
    "MG47":"L3 - KUKAR [L3KKR]", "MG48":"AHMAD YANI - KUKAR [AYKR]",
    "MG49":"AHMAD DAHLAN - KUKAR [ADKR]", "MG50":"MANGKUNEGARA - KUKAR [MKNKR]",
    "MG52":"SEBULU - KUKAR [SUKR]", "MG51":"CENDRAWASIH - BULUNGAN [CDRBL]",
    "MG53":"KASIMUDIN - BULUNGAN [KSBL]", "MG54":"BUMI RAHAYU - BULUNGAN [BUBL]",
    "MG55":"PATIMURA 2 - BALIKPAPAN [PTBN2]", "MG56":"SEGAH - BERAU [SGBU]",
    "MG57":"RAJA ALAM - BERAU [RA1BR]", "MG59":"MELANTI - SAMARINDA [MLSA]",
    "MG58":"DIPONEGORO BUKUAN - SAMARINDA", "SG1A":"SOEKARNO HATTA 4 KM 10 - BALIKPAPAN {SHBN4}",
    "SG1B":"A YANI BARU - BALIKPAPAN {AYBNB}", "SG1C":"PIERE TENDEAN - BALIKPAPAN {PTDBN}",
    "SG1D":"PRAMUKA - SAMARINDA [PKMD]", "SG1G":"YOS SUDARSO 4 FRANCHISE - SANGATTA [YSO4]",
    "SG1E":"URIP SUMOHARJO - SAMARINDA [USMD]", "SG1F":"MAKROMAN - SAMARINDA [MKMD]",
    "SG1K":"MULAWARMAN 5 - BALIKPAPAN {MBN5}", "SG1L":"ZAINAL ARIFIN - BALIKPAPAN [ZABN]",
    "SG1I":"PM NOOR - SAMARINDA [PNMD]", "SG1H":"RAPAK INDAH - SAMARINDA [RIMD]",
    "SG1J":"MULAWANMAN BARU - BALIKPAPAN (MBBN)", "SG1N":"REVOLUSI - SAMARINDA (RVMD)",
    "SG1M":"PADAT KARYA - BULUNGAN [PKBL]", "SG1O":"PATTIMURA - BONTANG  [PMBG]",
    "SG1R":"DAYUNG-SANGATTA [DYSG]", "SG1S":"WANASARI - WAHAU [WSWU]",
    "SG1P":"TEUKU UMAR - SAMARINDA [TUMD]", "SG1Q":"AW SYAHRANIE - SAMARINDA [ASMD]",
    "SG1T":"AHMAD YANI KM 7 - BANJARMASIN [AYBJ]", "SG1X":"JELAWAT - TENGGARONG [JWKR]",
    "SG1U":"SEKUMPUL UJUNG - BANJARMASIN [SUBJ]", "SG1V":"GUNUNG BELAH - KUKAR [GBKR]",
    "SG2E":"UNTUNG SUROPATI - SAMARINDA [USMD]", "SG1Z":"PIERE TENDEAN - BANJARMASIN [PTBM]",
    "SG2B":"GATOT SUBROTO - BANJARMASIN [GSBM]", "SG2D":"PANCA JAYA - KUKAR [PJKR]",
    "SG1W":"SENGKAWIT 2 - BULUNGAN [SW2BL]", "SG2C":"AHMAD YANI KM 76 - BANJARMASIN [AIBJ]",
    "SG1Y":"TATAH BANGKAL - BANJARMASIN [TBBM]", "SG2A":"HASAN BASRI - BANJARMASIN [HBBM]",
    "SG2L":"PERDAGANGAN - BANJARMASIN [PRDG]", "SG2K":"SULTAN SULAIMAN - SAMARINDA [SMAN]",
    "SG2F":"PERUM 1000 - BANJARMASIN [PMBJ]", "SG2H":"TANJUNG REMA - BANJARMASIN [TRBJ]",
    "SG2J":"SEKUMPUL MARTAPURA - BANJARMASIN [SMBJ]", "SG2G":"IRIGASI - BANJARMASIN [IGBJ]",
    "SG2I":"A YANI KM 10 - BANJARMASIN [AY10]", "SG2O":"PRAMUKA 2 - BANJARMASIN [PKA2]",
    "SG2M":"BUMI MAS RAYA - BANJARMASIN [BIMA]", "SG2N":"PEMAJATAN BANJAR - BANJARMASIN [PMJN]",
    "SG2Q":"SENTOSA - SAMARINDA [SOSA]", "SG2P":"WAHAU BARU- WAHAU [WABA]"
};

const CHECKLIST_DATA = {
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
    process: 0.40, // Mengasumsikan 10% agar total 100% (10 + 40 + 40 + 10 = 100).
    place: 0.10
};

// **PENTING: GANTI DENGAN URL WEB APP GOOGLE APPS SCRIPT ANDA**
const GOOGLE_APP_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwt4CmZZkA9QOvya6CRdt7q7BS2GDFpSzOPQCm19avrnxcLK3dcNCPMEE19vU_Dut1mgQ/exec'; 


// --- 2. FUNGSI UTAMA ---

function initApp() {
    // 2.1 Isi Dropdown Toko
    const selectToko = document.getElementById('kode_toko');
    for (const kode in TOKO_DATA) {
        const option = document.createElement('option');
        option.value = kode;
        option.textContent = `${kode} - ${TOKO_DATA[kode]}`;
        selectToko.appendChild(option);
    }

    // 2.2 Atur Event Listener untuk Dropdown
    selectToko.addEventListener('change', function() {
        document.getElementById('nama_toko').value = TOKO_DATA[this.value] || '';
    });

    // 2.3 Generate Checklist Form
    generateChecklist();

    // 2.4 Atur Event Listener untuk Form Submit
    document.getElementById('auditForm').addEventListener('submit', handleFormSubmit);
}

function generateChecklist() {
    const container = document.getElementById('checklist-container');
    container.innerHTML = '';
    
    // Counter untuk memberikan ID unik pada setiap radio button
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

function calculateScore(formData) {
    const results = {
        totalItems: 0,
        totalScore: 0,
        pilarScore: { people: 0, product: 0, process: 0, place: 0 },
        pilarMax: { people: 0, product: 0, process: 0, place: 0 },
        kategoriScore: { reguler: 0, fresh: 0 },
        kategoriMax: { reguler: 0, fresh: 0 },
        details: []
    };

    // Ambil semua radio button yang telah dipilih
    const selectedRadios = document.querySelectorAll('input[type="radio"]:checked');
    
    selectedRadios.forEach(radio => {
        const pilar = radio.dataset.pilar;
        const kategori = radio.dataset.kategori;
        const item = radio.dataset.item;
        const score = parseInt(radio.value); // Akan menjadi 1 (Ya) atau 0 (Tidak)

        // Hitung total skor dan poin per pilar/kategori
        results.totalItems++;
        results.totalScore += score;
        
        results.pilarScore[pilar] += score;
        results.pilarMax[pilar] += 1;
        
        results.kategoriScore[kategori] += score;
        results.kategoriMax[kategori] += 1;
        
        // Simpan data detail untuk dikirim ke Sheet 2
        results.details.push({
            pilar: pilar.charAt(0).toUpperCase() + pilar.slice(1),
            kategori: kategori.charAt(0).toUpperCase() + kategori.slice(1),
            item: item,
            jawaban: score === 1 ? 'Ya' : 'Tidak'
        });
    });

    // Hitung persentase skor per pilar
    const finalPilarScore = {};
    for (const pilar in results.pilarScore) {
        finalPilarScore[pilar] = results.pilarMax[pilar] > 0 
            ? results.pilarScore[pilar] / results.pilarMax[pilar] 
            : 0; // Skor dalam desimal (0.00 - 1.00)
    }

    // Hitung Final Score (Weighted Score)
    let finalWeightedScore = 0;
    for (const pilar in finalPilarScore) {
        finalWeightedScore += finalPilarScore[pilar] * BOBOT[pilar];
    }
    
    // Hitung Skor Reguler dan Fresh (Berdasarkan persentase total item di kategori tsb)
    const finalScoreReguler = results.kategoriMax.reguler > 0 
        ? (results.kategoriScore.reguler / results.kategoriMax.reguler) * 100 // Dalam %
        : 0;
    
    const finalScoreFresh = results.kategoriMax.fresh > 0 
        ? (results.kategoriScore.fresh / results.kategoriMax.fresh) * 100 // Dalam %
        : 0;

    return {
        finalTotalScore: (finalWeightedScore / (BOBOT.people + BOBOT.product + BOBOT.process + BOBOT.place)) * 100, // Normalisasi ke 100%
        finalScoreReguler: finalScoreReguler,
        finalScoreFresh: finalScoreFresh,
        details: results.details
    };
}

async function handleFormSubmit(event) {
    event.preventDefault();

    const kodeToko = document.getElementById('kode_toko').value;
    const namaToko = document.getElementById('nama_toko').value;
    const auditorName = document.getElementById('auditor_name').value;
    
    const calculatedScores = calculateScore(event.target);
    const timestamp = new Date().toLocaleString('id-ID', { hour12: false });
    
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
        timestamp: timestamp,
        
        // Data untuk Sheet 1 (Summary)
        summary: {
            kode_toko: kodeToko,
            nama_toko: namaToko,
            score_reguler: calculatedScores.finalScoreReguler.toFixed(2),
            score_fresh: calculatedScores.finalScoreFresh.toFixed(2),
            total_score: calculatedScores.finalTotalScore.toFixed(2)
        },

        // Data untuk Sheet 2 (Detail)
        details: calculatedScores.details
    };

    // --- KIRIM DATA KE GOOGLE APPS SCRIPT ---
    if (GOOGLE_APP_SCRIPT_URL === 'GANTI_DENGAN_URL_WEB_APP_ANDA') {
        alert("PERINGATAN: Ganti 'GOOGLE_APP_SCRIPT_URL' di app.js dengan URL Web App Anda.");
        console.log("Data yang akan dikirim:", finalPayload);
        return;
    }

    try {
        const response = await fetch(GOOGLE_APP_SCRIPT_URL, {
            method: 'POST',
            mode: 'no-cors', // Penting untuk Apps Script tanpa handling CORS khusus
            cache: 'no-cache',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(finalPayload)
        });

        // Karena menggunakan mode 'no-cors', kita tidak bisa membaca respons, tapi kita asumsikan berhasil.
        alert('Audit berhasil disubmit! Data telah disimpan ke Google Sheet.');

    } catch (error) {
        console.error('Error submitting data:', error);
        alert('Terjadi kesalahan saat menyimpan data. Cek koneksi atau URL Apps Script.');
    }
}

// Inisialisasi aplikasi saat dokumen selesai dimuat
document.addEventListener('DOMContentLoaded', initApp);